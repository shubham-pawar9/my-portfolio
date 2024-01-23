import React, { useState, useEffect, useRef } from "react";

const NavigationBar2 = ({ dimensions, darkMode }) => {
  const [isSticky, setSticky] = useState(false);
  const bottomNavBarRef = useRef();
  const handleComponentSelect = (e, component) => {
    let list = document.querySelector(".bottomLists.active");
    list.classList.remove("active");
    e.target.classList.add("active");
    const element = document.getElementById(component);
    if (element) {
      const yOffset = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: yOffset, behavior: "smooth" });
    }
    if (dimensions.height < 900 && dimensions.width < 800) {
      document.querySelector(".bottomNavBar").style.display = "none";
    }
  };
  const handleMenuStatus = () => {
    if (document.querySelector(".bottomNavBar"))
      document.querySelector(".bottomNavBar").style.display = "none";

    if (dimensions.width > 800 && dimensions.height < dimensions.width) {
      if (document.querySelector(".bottomNavBar"))
        document.querySelector(".bottomNavBar").style.display = "flex";
    } else if (dimensions.height < 900 && dimensions.width < 800) {
      if (document.querySelector(".bottomNavBar"))
        document.querySelector(".bottomNavBar").style.display = "none";
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        bottomNavBarRef.current &&
        Math.round(window.scrollY) === bottomNavBarRef.current.offsetTop
      ) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // console.log(isSticky);
  }, [isSticky]);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional, adds smooth scrolling effect
    });
  };
  const navBarClassName =
    isSticky && darkMode
      ? "bottomNavBar dark onTop"
      : !darkMode && isSticky
      ? "bottomNavBar onTop"
      : darkMode && !isSticky
      ? "bottomNavBar dark"
      : "bottomNavBar";
  return (
    <>
      <div id="bottomNavBar" className={navBarClassName} ref={bottomNavBarRef}>
        <button className="closeMenu" onClick={handleMenuStatus}>
          <img
            src={process.env.PUBLIC_URL + "/images/close.png"}
            alt="closeMenu"
          />
        </button>
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
          <a href="#contact">
            <li
              className="bottomLists"
              onClick={(e) => handleComponentSelect(e, "contact")}
            >
              Contact
            </li>
          </a>
        </ul>
        <img
          src={process.env.PUBLIC_URL + "/images/profile.jpg"}
          alt="account"
          className="profile-icon"
          onClick={scrollToTop}
        />
      </div>
    </>
  );
};
export default NavigationBar2;
