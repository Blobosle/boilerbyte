import MainHero from "./components/MainHero"
import Navbar from "./components/Navbar"

export default function App() {
    return (
        <div className="bg-gradient-to-r from-stone-900 to-stone-950 min-h-screen">
            <Navbar />
            <MainHero />
        </div>
    );
}

