import logo from "./logo.svg";
import "./App.css";

import NavigationBar from "./Component/NavigationBar";
import Cover from "./Component/Section/Cover";
import Home from "./Component/Section/Home";
import About from "./Component/Section/About";
import Contact from "./Component/Section/Contact";
import Projects from "./Component/Section/Projects";
import NavigationBar2 from "./Component/NavigationBar2";
import Work from "./Component/Section/Work";
import { useState } from "react";
import Blogs from "./Component/Section/Blogs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const [contactInfo, setContactInfo] = useState("");
  const [mobState, setMobState] = useState(
    window.innerWidth < 650 && window.innerHeight < 900
  );
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const [showCV, setShowCV] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const handleShowCV = () => {
    setShowCV(true);
  };
  console.log(darkMode);
  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }
    window.addEventListener("resize", handleResize);
    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return (
    <div className="App">
      {!showCV && (
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <NavigationBar
                    dimensions={dimensions}
                    setDarkMode={setDarkMode}
                    darkMode={darkMode}
                  />
                  <Cover handleShowCV={handleShowCV} darkMode={darkMode} />
                  <NavigationBar2 dimensions={dimensions} darkMode={darkMode} />
                  <About />
                  <Work />
                  <Projects />
                  <Contact setContactInfo={setContactInfo} />
                </>
              }
            />
            <Route path="/my-blogs" element={<Blogs />} />
          </Routes>
        </Router>
      )}
      {showCV && (
        <div className="cv-container">
          <button
            className="cv-close"
            onClick={() => {
              darkMode ? setDarkMode(true) : setDarkMode(false);
              setShowCV(false);
            }}
            title="close pdf mode"
          >
            <img
              src={process.env.PUBLIC_URL + "/images/close.png"}
              alt="close pdf view"
            />
          </button>
          <iframe
            title="CV"
            src={process.env.PUBLIC_URL + "/cv/shubham-pawar.pdf"}
            width="100%"
            height="600"
            style={{ border: "none" }}
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default App;
