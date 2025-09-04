import {BrowserRouter, Routes, Route} from "react-router-dom";
import {ReactLenis} from "lenis/react"
import DefaultLayout from "./components/layout/DefaultLayout.jsx";
import Welcome from "./pages/Welcome.jsx";
import Resume from "./pages/Resume.jsx";
import Feed from "./pages/Feed.jsx";
import View from "./pages/View.jsx";
import "./App.scss"

function App() {
  return (
    <ReactLenis root>
      <BrowserRouter>
        <DefaultLayout>
          <Routes>
            <Route path="/" element={<Welcome/>}/>
            <Route path="/resume" element={<Resume/>}/>
            <Route path="/feed" element={<Feed/>}/>
            <Route path="/feed/:id" element={<View/>}/>
          </Routes>
        </DefaultLayout>
      </BrowserRouter>
    </ReactLenis>
  );
}

export default App;