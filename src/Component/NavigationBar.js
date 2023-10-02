import { useEffect, useState } from "react";

const NavigationBar = () => {
  const [suggestionText, setSuggestionText] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const handleMyWhatsapp = () => {
    let phoneNumber = "+917843068183";

    var defaultMessage = "Hello";

    var whatsappURL =
      "https://api.whatsapp.com/send?phone=" +
      phoneNumber +
      "&text=" +
      encodeURIComponent(defaultMessage);

    window.open(whatsappURL);
  };
  let searchArray = [
    "about",
    "work",
    "education",
    "collage",
    "company",
    "post",
    "projects",
    "github",
    "profile",
    "call",
    "mail",
    "facebook",
    "whatsapp",
    "instagram",
    "twitter",
    "website",
    "mobile",
    "career",
    "contact",
    "message",
    "designed",
  ];
  const handleSuggestion = (searchTxt) => {
    return searchArray.filter((val) => val.includes(searchTxt));
  };
  const handleSearchBar = (e) => {
    const searchTxt = e.target.value;
    setInputValue(searchTxt);
    const suggText = handleSuggestion(searchTxt);
    setSuggestionText(suggText);
  };
  const handleClickOutsideSuggestionList = (event) => {
    const suggestionList = document.querySelector(".suggestionList");
    if (suggestionList && !suggestionList.contains(event.target)) {
      setSuggestionText([]);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutsideSuggestionList);
    return () => {
      document.removeEventListener("click", handleClickOutsideSuggestionList);
    };
  }, []);

  const handleSuggestionFunction = (item) => {
    setInputValue(item);
    let mainId = document
      .querySelector(`.${item}`)
      .parentNode.closest(".allMainDiv");
    console.log(mainId);
    if (mainId) {
      document.querySelector(`.${item}`).style.transition =
        "all 0.5s ease-in-out";
      document.querySelector(`.${item}`).style.backgroundColor = "#8c939d";
      const yOffset = mainId.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: yOffset, behavior: "smooth" });
      setTimeout(() => {
        document.querySelector(`.${item}`).style.backgroundColor = "revert";
      }, 2000);
    }
    console.log(item);
  };
  return (
    <>
      <div className="navBar allMainDiv">
        <div className="leftSide">
          <img
            src={process.env.PUBLIC_URL + "/images/code.png"}
            alt="logoImage"
          />
          <div className="search-container">
            <img
              src={process.env.PUBLIC_URL + "/images/search.png"}
              alt="search bar"
            />
            <input
              className="searchBar"
              type="text"
              placeholder="search about me"
              value={inputValue}
              onChange={(e) => handleSearchBar(e)}
            />
            <ul className="suggestionList">
              {suggestionText &&
                suggestionText.map((item, index) => {
                  return (
                    <li
                      key={index}
                      onClick={() => handleSuggestionFunction(item)}
                    >
                      {item}
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
        <div className="centerSide">
          <ul>
            <li>
              <img
                src={process.env.PUBLIC_URL + "/images/home.png"}
                alt="Home"
              />
            </li>
            <li>
              <img
                src={process.env.PUBLIC_URL + "/images/project.png"}
                alt="Projects"
              />
            </li>
            <li>
              <img
                src={process.env.PUBLIC_URL + "/images/about.png"}
                alt="About"
              />
            </li>
            <li>
              <img
                src={process.env.PUBLIC_URL + "/images/contact.png"}
                alt="Contact"
              />
            </li>
            <li>
              <img
                src={process.env.PUBLIC_URL + "/images/menu.png"}
                alt="Menu"
              />
            </li>
          </ul>
        </div>
        <div className="rightSide">
          <img
            className="whatsapp"
            src={process.env.PUBLIC_URL + "/images/message.png"}
            alt="whatsappIcon"
            onClick={handleMyWhatsapp}
          />
          <img
            src={process.env.PUBLIC_URL + "/images/notification.png"}
            alt="notification"
          />
          <img
            src={process.env.PUBLIC_URL + "/images/profile.jpg"}
            alt="account"
          />
        </div>
      </div>
    </>
  );
};
export default NavigationBar;
