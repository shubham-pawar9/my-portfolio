import { useState } from "react";

const NavigationBar2 = () => {
  const handleComponentSelect = (e, component) => {
    let list = document.querySelector(".bottomLists.active");
    console.log(list);
    list.classList.remove("active");
    e.target.classList.add("active");
    const element = document.getElementById(component);
    if (element) {
      const yOffset = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: yOffset, behavior: "smooth" });
    }
  };

  return (
    <>
      <div id="bottomNavBar" className="bottomNavBar">
        <ul className="bottomNavList">
          <a href="#about">
            <li
              className="bottomLists active"
              onClick={(e) => handleComponentSelect(e, "about")}
            >
              About
            </li>
          </a>
          <a href="#work">
            <li
              className="bottomLists"
              onClick={(e) => handleComponentSelect(e, "work")}
            >
              Work
            </li>
          </a>
          <a href="#project">
            <li
              className="bottomLists"
              onClick={(e) => handleComponentSelect(e, "project")}
            >
              Projects
            </li>
          </a>
          <li className="bottomLists">Take a Tour</li>
        </ul>
      </div>
    </>
  );
};
export default NavigationBar2;
