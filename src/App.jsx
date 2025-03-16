import { ReactLenis, useLenis } from 'lenis/react'
import './App.min.scss'

import Header from "./components/layout/Header.jsx";
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
