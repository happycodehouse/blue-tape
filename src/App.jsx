import {BrowserRouter, Routes, Route} from "react-router-dom";
import {ReactLenis} from "lenis/react"
import Layout from "./components/layout/Layout.jsx";
import Welcome from "./pages/home/Home.jsx";
import Resume from "./pages/resume/Resume.jsx";
import Feed from "./pages/feed/Feed.jsx";
import View from "./pages/feed/View.jsx";
import "./App.scss"

function App() {
  return (
    <ReactLenis root>
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
    </ReactLenis>
  );
}

export default App;