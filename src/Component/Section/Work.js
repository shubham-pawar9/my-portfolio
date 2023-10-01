const Work = () => {
  return (
    <>
      <div id="work" className="workMainDiv allMainDiv">
        <div className="infoDiv">
          <h3 className="career">Career History</h3>
          <div className="introText">
            <div className="introduction">
              <div className="textDiv">
                <span>
                  <h3>HMX Media Pvt Ltd</h3>
                  <h4>Front End Developer</h4>
                </span>
                <span>December 21, 2020 – Present</span>
              </div>
            </div>
            <div className="introduction">
              <div className="textDiv">
                <span>
                  Joined HMX Media in December 2020 as a Front-End Developer,
                  contributing to the core Web team.<br></br>• Proficiently
                  worked with a range of technologies including HTML, CSS,
                  JavaScript, jQuery, Bootstrap, AJAX, JSON, and React JS.
                  <br></br>• Utilized Git for effective code collaboration,
                  streamlining the development process among programmers.
                  <br></br>• Took charge of multiple projects from their
                  inception, displaying adaptability in handling projects from
                  scratch.<br></br>• Thrived in a dynamic, small-scale company
                  environment, gaining valuable insights into understanding
                  business requirements right from the early stages of my
                  career.<br></br>• Drove project count incrementally by
                  consistently delivering projects on schedule and maintaining
                  high quality.
                  <br></br>• Adeptly build reusable components that have
                  cross-project and cross-application utility.<br></br>• Employ
                  cutting-edge technologies including WebGl, WebAPIs, ReactJS,
                  and JavaScript to craft interactive and responsive
                  applications.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="socialDiv">
          <h3>Projects in HMX Media</h3>
          <div className="introText">
            <div className="introduction">
              <img
                src={process.env.PUBLIC_URL + "/images/dell.png"}
                alt="icon"
              />
              <a href="https://content.hmxmedia.com/xps-13-9315-laptop/index.html">
                <div className="textDiv">
                  <span>Dell Technologies</span>
                  <span>
                    Technologies - React JS, Material UI, JavaScript, Json
                  </span>
                  <span>
                    Models - Laptop, Desktop, Monitor, Servers, Accessories.
                  </span>
                </div>
              </a>
            </div>
            <div className="introduction">
              <img
                src={process.env.PUBLIC_URL + "/images/sharp.png"}
                alt="icon"
              />
              <a href="https://content.hmxmedia.com/sharp/index.html">
                <div className="textDiv">
                  <span>Sharp - Kitchen Appliances</span>
                  <span>
                    Technologies - React JS, Material UI, JavaScript, Json
                  </span>
                </div>
              </a>
            </div>
            <div className="introduction">
              <img
                src={process.env.PUBLIC_URL + "/images/royalEnfield.png"}
                alt="icon"
              />
              <a href="https://makeityours.royalenfield.com/configurator/interceptor-650">
                <div className="textDiv">
                  <span>Royal Enfield</span>
                  <span>
                    Technologies - Html, CSS, JavaScript, jQuery, Bootstrap
                  </span>
                </div>
              </a>
            </div>
            <div className="introduction">
              <img
                src={process.env.PUBLIC_URL + "/images/lenovo.png"}
                alt="icon"
              />
              <a href="https://www.lenovo.com/in/en/data-center/servers/racks/ThinkSystem-SR650/p/77XX7SRSR65#tab-li-productTour">
                <div className="textDiv">
                  <span>Lenovo</span>
                  <span>Technologies - JavaScript, jQuery, HTML, CSS, XML</span>
                  <span>
                    Models - Lenovo Tablets, Smart Devices & Accessories
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Work;
