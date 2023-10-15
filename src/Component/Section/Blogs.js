import { useEffect, useRef, useState } from "react";
import blogData from "../../data.json";
import { NavLink } from "react-router-dom";
const Blogs = () => {
  const [apiData, setApiData] = useState([]);
  const buttonRef = useRef("");
  const handleNavClick = () => {
    buttonRef.current.style.width == "25%"
      ? (buttonRef.current.style.width = "0%")
      : (buttonRef.current.style.width = "25%");
  };

  // const fetchBlogAPI = () => {
  //   return new Promise(async (resolve, reject) => {
  //     try {
  //       const res = await fetch("data.json");
  //       const data = res.json();
  //       console.log(data);
  //       resolve(data);
  //     } catch (error) {
  //       reject(error);
  //     }
  //   });
  // };
  // useEffect(() => {
  //   fetchBlogAPI()
  //     .then((data) => setApiData(data))
  //     .catch((error) => console.log(error));
  // });
  useEffect(() => {
    setApiData(blogData);
    console.log(apiData);
  }, []);
  return (
    <>
      <div className="blogMain">
        <header className="headerBar">
          <button className="navBtn" onClick={handleNavClick}>
            <img
              className="burgerIcon"
              src={process.env.PUBLIC_URL + "/images/menu.png"}
              alt="Menu"
            />
          </button>
          <input
            className="blogSearchBar"
            type="search"
            placeholder="search here"
          />
          <NavLink to={"/"}>
            <button className="blogCloseBtn">Back to HOME</button>
          </NavLink>
        </header>
        <div className="mainSection">
          <nav className="navigationBar" ref={buttonRef}>
            <ul>
              <li>Html</li>
              <li>Css</li>
              <li>JavaScript</li>
              <li>Advance Javascript</li>
              <li>jQuery</li>
              <li>React js</li>
              <li>Redux</li>
            </ul>
          </nav>
          <div className="section">
            {apiData &&
              apiData.map((value, index) => {
                return (
                  <div className="blogPost">
                    <img
                      className="postImg"
                      src={
                        process.env.PUBLIC_URL + `/images/blog/${value.src}.png`
                      }
                      alt="postImg"
                    />
                    <h2 className="postHeading">{value.heading}</h2>
                    <div className="postTextDiv">
                      <span className="PostText">{value.shortDiscription}</span>
                    </div>
                    <div className="postMainTextDiv">
                      <h2>{value.mainDiscription.heading} -</h2>

                      <ol>
                        {value.mainDiscription.details.map((item, index) => {
                          return <li>{item}</li>;
                        })}
                      </ol>
                    </div>
                    {/* <span className="date">
                        <b>Published At - </b> <i>{value.createdAt}</i>
                      </span> */}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Blogs;
