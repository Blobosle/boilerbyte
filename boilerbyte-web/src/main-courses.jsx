import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Courses from "./components/Courses";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <div className="bg-gradient-to-r from-stone-900 to-stone-950 min-h-screen">
            <Navbar />
            <Courses />
            <Footer />
        </div>
    </StrictMode>,
)

