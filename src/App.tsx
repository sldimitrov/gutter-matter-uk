import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useScrollToTop } from './hooks/use-scroll-top'

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Reviews from "./pages/Reviews";
import CompanyInfo from "./pages/CompanyInfo";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { Analytics } from "@vercel/analytics/react"

const queryClient = new QueryClient();

const App = () => {
  return (
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster/>
            <Sonner/>
            <Analytics/>
            <BrowserRouter>
              <Header/>
              <ScrollToTopWrapper/>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/gallery" element={<Gallery/>}/>
                <Route path="/reviews" element={<Reviews/>}/>
                <Route path="/company-info" element={<CompanyInfo/>}/>
                <Route path="/contact" element={<Contact/>}/>
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound/>}/>
              </Routes>
              <Footer/>
            </BrowserRouter>
          </TooltipProvider>
        </QueryClientProvider>
    );
}

function ScrollToTopWrapper() {
  useScrollToTop();
  return null;
}

export default App;
