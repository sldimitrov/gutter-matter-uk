import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import type { RouteRecord } from "vite-react-ssg";
import { useScrollToTop } from "./hooks/use-scroll-top";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import FloatingCallButton from "./components/layout/FloatingCallButton";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Reviews from "./pages/Reviews";
import CompanyInfo from "./pages/CompanyInfo";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { Analytics } from "@vercel/analytics/react";

const queryClient = new QueryClient();

/**
 * Chrome shared by every page. Under vite-react-ssg the router itself is owned by the
 * framework, so there is no <BrowserRouter> here — the layout renders an <Outlet/> and
 * the route table below decides what fills it.
 */
function Layout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Analytics />
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Header />
        <ScrollToTopWrapper />
        <Outlet />
        <Footer />
        <FloatingCallButton />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

function ScrollToTopWrapper() {
  useScrollToTop();
  return null;
}

/**
 * Route table. vite-react-ssg walks this at build time to decide which URLs to emit as
 * static HTML, so every indexable page must appear here as a concrete path.
 */
export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "services", element: <Services /> },
      { path: "gallery", element: <Gallery /> },
      { path: "reviews", element: <Reviews /> },
      { path: "company-info", element: <CompanyInfo /> },
      { path: "contact", element: <Contact /> },
      // Catch-all: not a static path, so it is not prerendered as its own file.
      // It handles unknown URLs client-side after hydration.
      { path: "*", element: <NotFound /> },
    ],
  },
];

export default routes;
