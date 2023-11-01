const NavigationBar2 = ({ dimensions }) => {
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
  };
  if (dimensions.width > 800 && dimensions.height < dimensions.width) {
    if (document.querySelector(".bottomNavBar"))
      document.querySelector(".bottomNavBar").style.display = "block";
  } else if (dimensions.height < 900 && dimensions.width < 800) {
    if (document.querySelector(".bottomNavBar"))
      document.querySelector(".bottomNavBar").style.display = "none";
  }
  return (
    <>
      <div id="bottomNavBar" className="bottomNavBar">
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
      </div>
    </>
  );
};
export default NavigationBar2;
