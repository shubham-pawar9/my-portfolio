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

function App() {
  const [contactInfo, setContactInfo] = useState("");
  const [blogShow, setBlogShow] = useState(false);
  return (
    <div className="App">
      {!blogShow && (
        <>
          <NavigationBar contactInfo={contactInfo} />
          <Cover setBlogShow={setBlogShow} />
          <NavigationBar2 />
          <About />
          <Work />
          <Projects />
          <Contact setContactInfo={setContactInfo} />
        </>
      )}
      {blogShow && <Blogs setBlogShow={setBlogShow} />}
    </div>
  );
}

export default App;
