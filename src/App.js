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

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Cover />
      <NavigationBar2 />
      <About />
      <Work />
      <Projects />
      <Home />
      <Contact />
    </div>
  );
}

export default App;
