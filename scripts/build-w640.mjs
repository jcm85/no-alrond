#!/usr/bin/env node
/**
 * Phone-sized step pictures. Writes public/step-pics/w640/<name>.webp at 640px
 * wide. The app requests these with <picture> / media, never by importing them.
 */
import { spawn } from "node:child_process";
import { mkdirSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const root = join(import.meta.dirname, "..");
const srcDir = join(root, "public/step-pics");
const outDir = join(srcDir, "w640");
mkdirSync(outDir, { recursive: true });

const files = readdirSync(srcDir).filter((name) => /\.(webp|jpe?g|png)$/i.test(name));
const jobs = [];
for (const name of files) {
  const base = name.replace(/\.(webp|jpe?g|png)$/i, "");
  const input = join(srcDir, name);
  const output = join(outDir, `${base}.webp`);
  try {
    if (statSync(output).mtimeMs >= statSync(input).mtimeMs && statSync(output).size > 500) continue;
  } catch {
    /* missing */
  }
  jobs.push({ input, output });
}

async function encode(job) {
  await new Promise((resolve, reject) => {
    const child = spawn(
      "ffmpeg",
      [
        "-y",
        "-hide_banner",
        "-loglevel",
        "error",
        "-i",
        job.input,
        "-vf",
        "scale=640:-2",
        "-c:v",
        "libwebp",
        "-quality",
        "68",
        "-compression_level",
        "4",
        job.output,
      ],
      { stdio: ["ignore", "ignore", "pipe"] },
    );
    let err = "";
    child.stderr.on("data", (chunk) => {
      err += chunk;
    });
    child.on("exit", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`${job.input}: ${err || `ffmpeg ${code}`}`));
    });
  });
}

const workers = Math.min(8, Math.max(1, jobs.length));
let cursor = 0;
async function worker() {
  while (cursor < jobs.length) {
    const job = jobs[cursor];
    cursor += 1;
    await encode(job);
  }
}
await Promise.all(Array.from({ length: workers }, () => worker()));
console.log(`w640 ready: ${files.length} sources, ${jobs.length} encoded`);
