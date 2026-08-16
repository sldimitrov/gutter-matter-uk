import { ViteReactSSG } from "vite-react-ssg";
import { routes } from "./App";
import "./index.css";

// ViteReactSSG owns the router. At build time it walks `routes` and emits a static HTML
// file per concrete path; in the browser the same entry hydrates the prerendered markup.
export const createRoot = ViteReactSSG({ routes });
