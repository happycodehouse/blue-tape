import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Link} from "react-router-dom";
import {ReactLenis, useLenis} from "lenis/react"
import DefaultLayout from "./components/layout/DefaultLayout.jsx";
import Main from "./pages/Main.jsx";
import About from "./pages/About.jsx";

import "./App.scss"

function App() {
  const lenis = useLenis(({scroll}) => {
    // called every scroll
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ReactLenis root>
              <DefaultLayout>
                <Main />
              </DefaultLayout>
            </ReactLenis>
          }
        />

        <Route
          path="/about"
          element={
            <ReactLenis root>
              <DefaultLayout>
                <About/>
              </DefaultLayout>
            </ReactLenis>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;