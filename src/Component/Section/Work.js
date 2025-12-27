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
                  <h3>Prometteur Solutions Pvt Ltd</h3>
                  <h4>React JS Developer</h4>
                </span>
                <span>April 03, 2024 – Present</span>
              </div>
            </div>
            <div className="introduction">
              <div className="textDiv">
                <span>
                  • Working as a React JS Developer, building scalable and
                  user-friendly web applications.<br></br>• Hands-on experience
                  with React JS, TypeScript, Next.js, and modern UI libraries
                  like Material UI, Ant Design, and Bootstrap.<br></br>•
                  Integrated REST APIs using JavaScript and tested endpoints
                  with Postman.<br></br>• Familiar with AWS services and basic
                  database concepts for application integration.<br></br>•
                  Focused on performance optimization, reusable components, and
                  clean, maintainable code.
                </span>
              </div>
            </div>
          </div>
          <div className="introText">
            <div className="introduction">
              <div className="textDiv">
                <span>
                  <h3>HMX Media Pvt Ltd</h3>
                  <h4>Front End Developer</h4>
                </span>
                <span>December 21, 2020 – March 15, 2024</span>
              </div>
            </div>
            <div className="introduction">
              <div className="textDiv">
                <span>
                  • Built responsive and user-friendly web applications using
                  HTML, CSS, JavaScript, jQuery, Bootstrap, AJAX, JSON, and
                  React JS.<br></br>• Collaborated with team members using Git
                  for version control, ensuring efficient code management and
                  deployment.<br></br>• Handled multiple projects from scratch,
                  from requirement gathering to final delivery.<br></br>• Worked
                  closely with stakeholders to understand business requirements
                  in a fast-paced startup environment.<br></br>• Delivered
                  high-quality projects on time, contributing to consistent
                  project success and client satisfaction.<br></br>• Designed
                  and developed reusable UI components to improve development
                  efficiency across projects.<br></br>
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
