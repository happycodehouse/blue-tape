import { ReactLenis, useLenis } from 'lenis/react'
import './App.scss'

import Header from "@/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";

function App() {
    const lenis = useLenis(({ scroll }) => {
        // called every scroll
    })

    return (
        <ReactLenis root>
            <Header />
            <div className='container'>aaaa</div>
            <Footer />
        </ReactLenis>
    )
}

export default App
