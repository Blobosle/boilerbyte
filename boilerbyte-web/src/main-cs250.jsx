import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cs250 from "./components/Cs250";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <div className="bg-gradient-to-r from-stone-900 to-stone-950 min-h-screen">
            <Navbar />
            <Cs250 />
            <Footer />
        </div>
    </StrictMode>,
)

