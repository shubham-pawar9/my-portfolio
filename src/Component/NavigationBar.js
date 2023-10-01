const NavigationBar = () => {
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
  return (
    <>
      <div className="navBar">
        <div className="leftSide">
          <img src="./images/code.png" alt="logoImage" />
          <div class="search-container">
            <img src="./images/search.png" alt="search bar" />
            <input
              className="searchBar"
              type="text"
              placeholder="search about me"
            />
          </div>
        </div>
        <div className="centerSide">
          <ul>
            <li>
              <img src="./images/home.png" alt="Home" />
            </li>
            <li>
              <img src="./images/project.png" alt="Projects" />
            </li>
            <li>
              <img src="./images/about.png" alt="About" />
            </li>
            <li>
              <img src="./images/contact.png" alt="Contact" />
            </li>
            <li>
              <img src="./images/menu.png" alt="Menu" />
            </li>
          </ul>
        </div>
        <div className="rightSide">
          <img
            src="./images/message.png"
            alt="whatsappIcon"
            onClick={handleMyWhatsapp}
          />
          <img src="./images/notification.png" alt="notification" />
          <img src="./images/profile.jpg" alt="account" />
        </div>
      </div>
    </>
  );
};
export default NavigationBar;
