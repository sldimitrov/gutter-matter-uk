import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";

const SITE = "https://guttermatter.com";

/** Priority hints for the generated sitemap. Anything unlisted falls back to 0.6. */
const PRIORITIES: Record<string, string> = {
  "/": "1.0",
  "/services": "0.9",
  "/contact": "0.9",
  "/reviews": "0.8",
  "/gallery": "0.7",
  "/company-info": "0.5",
};

/** Walk dist/ and turn every emitted .html file into the URL it will be served at. */
function urlsFromBuild(dir: string, base = ""): string[] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    if (entry.isDirectory()) return urlsFromBuild(path.join(dir, entry.name), `${base}/${entry.name}`);
    if (!entry.name.endsWith(".html")) return [];
    if (entry.name === "404.html") return []; // never list a noindex page in a sitemap
    const name = entry.name.replace(/\.html$/, "");
    return [name === "index" ? `${base}/` : `${base}/${name}`];
  });
}

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist"
  },
  ssgOptions: {
    // 'flat' emits dist/about.html rather than dist/about/index.html. Combined with
    // "cleanUrls": true in vercel.json, /about serves about.html with no redirect.
    dirStyle: "flat",
    includedRoutes(paths: string[]) {
      // The catch-all "*" route has no concrete path, so it is never prerendered on its
      // own. Rendering it at /404 produces dist/404.html, which Vercel serves — with a
      // real 404 status — for any URL that has no matching file.
      return [...paths, "/404"];
    },
    onFinished() {
      // Generate the sitemap from what was actually built, rather than maintaining a
      // static file by hand. Add a route and it appears here automatically; delete one
      // and it disappears. The two can never drift apart.
      const dist = path.resolve(__dirname, "dist");
      const urls = urlsFromBuild(dist).sort();
      const today = new Date().toISOString().slice(0, 10);

      const body = urls
        .map((u) => {
          const loc = `${SITE}${u === "/" ? "/" : u}`;
          const priority = PRIORITIES[u] ?? "0.6";
          return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${priority}</priority>\n  </url>`;
        })
        .join("\n");

      fs.writeFileSync(
        path.join(dist, "sitemap.xml"),
        `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`,
      );
      console.log(`\n[sitemap] wrote ${urls.length} URLs to dist/sitemap.xml`);

    },
  },
}));
