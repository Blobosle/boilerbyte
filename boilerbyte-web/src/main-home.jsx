import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MainHero from "./components/MainHero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Analytics />
        <div className="bg-gradient-to-r from-stone-900 to-stone-950 min-h-screen">
            <Navbar />
            <MainHero />
            <Footer />
        </div>
    </StrictMode>,
)
