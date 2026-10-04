#!/usr/bin/env node
/**
 * Build a fully static copy of the app for GitHub Pages (project site).
 *
 *   node scripts/build-pages.mjs [outDir] [base]      defaults: pages-dist  /no-alrond/
 *
 * The app keeps all progress in localStorage and its only server work is the
 * first HTML render, so we build normally with a Vite base, render `/` once from
 * `vite preview`, and ship that HTML (index.html + 404.html) next to the static
 * assets. The Grok preview-only head tags and extensions.js are stripped.
 */
import { spawn, spawnSync } from "node:child_process";
import { cpSync, existsSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const out = resolve(process.argv[2] ?? "pages-dist");
let base = process.argv[3] ?? "/no-alrond/";
if (!base.startsWith("/")) base = `/${base}`;
if (!base.endsWith("/")) base = `${base}/`;
const env = { ...process.env, PAGES_BASE: base };
const bin = join(process.cwd(), "node_modules", ".bin");
env.PATH = `${bin}:${env.PATH}`;
const port = 8092;

const build = spawnSync("node", ["scripts/with-app-env.mjs", "vite", "build"], { env, stdio: "inherit" });
if (build.status !== 0) process.exit(build.status ?? 1);

const server = spawn("node", ["scripts/with-app-env.mjs", "vite", "preview", "--port", String(port)], { env, stdio: "ignore" });
let html = "";
try {
  for (let i = 0; i < 60 && !html; i++) {
    await new Promise((r) => setTimeout(r, 500));
    try {
      const res = await fetch(`http://127.0.0.1:${port}${base}`);
      if (res.ok) html = await res.text();
    } catch {
      /* server not up yet */
    }
  }
} finally {
  server.kill();
}
if (!html.includes("<!DOCTYPE html>")) throw new Error("could not render the app shell from vite preview");

html = html
  .replace(/<link rel="manifest"[^>]*>/g, "")
  .replace(/<link rel="apple-touch-icon" href="\/__grok[^>]*>/g, "")
  .replace(/<script src="https:\/\/grok\.com\/grok-app-builder\/extensions\.js"[^>]*><\/script>/g, "");

rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });
const staticDir = join(".vercel", "output", "static");
if (!existsSync(staticDir)) throw new Error(`${staticDir} missing`);
cpSync(staticDir, out, { recursive: true });
writeFileSync(join(out, "index.html"), html);
writeFileSync(join(out, "404.html"), html);
writeFileSync(join(out, ".nojekyll"), "");
console.log(`static site in ${out} (base ${base})`);
