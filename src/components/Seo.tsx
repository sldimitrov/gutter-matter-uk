import { Head } from "vite-react-ssg";
import { useLocation } from "react-router-dom";

const SITE = "https://guttermatter.com";

type SeoProps = { title: string; description: string; image?: string; noIndex?: boolean };

export default function Seo({
  title,
  description,
  // JPEG, not WebP: link-preview crawlers (X, LinkedIn, some chat apps) still have
  // patchy WebP support. 1200x675 is the standard OG aspect ratio.
  image = "/assets/gutter_matter_og.jpg",
  noIndex = false,
}: SeoProps) {
  const { pathname } = useLocation();
  const url = `${SITE}${pathname === "/" ? "" : pathname}`;
  const absImage = `${SITE}${image}`;

  // <Head> comes from vite-react-ssg rather than react-helmet-async: it is the head
  // manager the prerenderer serialises into the emitted HTML at build time. Helmet only
  // writes to the DOM at runtime, so its tags would never reach the static files.
  // defer={false} writes tags synchronously. The default defers via requestAnimationFrame,
  // which never fires in a tab that isn't compositing frames — so client-side route changes
  // would silently fail to update the head in headless browsers and background tabs.
  return (
    <Head defer={false}>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noIndex ? "noindex, follow" : "index, follow"} />
      {/*
        No canonical on noindex pages. dist/404.html is served for *every* unknown URL,
        so a canonical there would have every bad URL declaring itself canonical at /404.
      */}
      {!noIndex && <link rel="canonical" href={url} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={absImage} />
      <meta property="og:site_name" content="Gutter Matter Ltd" />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absImage} />
    </Head>
  );
}
