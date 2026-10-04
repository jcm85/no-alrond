const STEP_PIC_CACHE = "public, max-age=604800, stale-while-revalidate=2592000";

/**
 * Step picture filenames are the step id, not a content hash, so cache them
 * for a week and revalidate. Vercel also sends this via vercel.json for the
 * static CDN copy.
 */
export default async function stepPicCache(
  event: { url: URL },
  next: () => unknown | Promise<unknown>,
): Promise<unknown> {
  if (!event.url.pathname.startsWith("/step-pics/")) return next();
  const result = await next();
  if (!(result instanceof Response)) return result;
  const headers = new Headers(result.headers);
  headers.set("cache-control", STEP_PIC_CACHE);
  return new Response(result.body, {
    status: result.status,
    statusText: result.statusText,
    headers,
  });
}
