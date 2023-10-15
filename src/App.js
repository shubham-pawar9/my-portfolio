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

function App() {
  const [contactInfo, setContactInfo] = useState("");
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavigationBar contactInfo={contactInfo} />
                <Cover />
                <NavigationBar2 />
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
    </div>
  );
}

export default App;
