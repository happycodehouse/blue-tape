import { ReactLenis } from "lenis/react"
import { HelmetProvider } from "react-helmet-async";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Feed from "./pages/feed/Feed";
import View from "./pages/feed/View";
import Welcome from "./pages/home/Home";
import Resume from "./pages/resume/Resume";
import "./App.scss"

function App() {
  return (
    <ReactLenis root>
      <HelmetProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Welcome/>}/>
              <Route path="/resume" element={<Resume/>}/>
              <Route path="/feed" element={<Feed/>}/>
              <Route path="/feed/:id" element={<View/>}/>
            </Routes>
          </Layout>
        </BrowserRouter>
      </HelmetProvider>
    </ReactLenis>
  );
}

export default App;