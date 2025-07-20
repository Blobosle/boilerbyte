import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cs251 from "./components/Cs251";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <div className="bg-gradient-to-r from-stone-900 to-stone-950 min-h-screen">
            <Navbar />
            <Cs251 />
            <Footer />
        </div>
    </StrictMode>,
)

