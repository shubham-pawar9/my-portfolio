import { useState } from "react";

const Projects = () => {
  const [projectUrl, setProjectUrl] = useState(
    "https://shubham-pawar9.github.io/ai-tool-shunu/"
  );
  const handleUrlClick = (url) => {
    setProjectUrl(url);
  };
  return (
    <>
      <div id="project" className="projectsMainDiv allMainDiv">
        <div className="infoDiv">
          <iframe
            id="projectIframe"
            width="100%"
            height="100%"
            src={projectUrl}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <div className="socialDiv">
          <h3 className="projects github">
            Explore some of my latest projects on GitHub
          </h3>
          <div className="introText">
            <div className="introduction">
              <img
                src={process.env.PUBLIC_URL + "/images/ai-tool.png"}
                alt="icon"
              />
              <div
                className="textDiv"
                onClick={() =>
                  handleUrlClick(
                    "https://shubham-pawar9.github.io/ai-tool-shunu/"
                  )
                }
              >
                <span className="mobOnlyText">
                  <a
                    href="https://shubham-pawar9.github.io/ai-tool-shunu/"
                    target="_blank"
                  >
                    AI-TOOL-(AI Assistant)
                  </a>
                </span>
                <span className="desktopOnlyText">AI-TOOL-(AI Assistant)</span>
                <span>
                  Technologies - React.js: The entire AI assistant is built
                  using the React.js library, ensuring a modular,
                  component-based structure and dynamic UI updates.
                </span>
              </div>
            </div>
            <div className="introduction">
              <img
                src={process.env.PUBLIC_URL + "/images/elevator.png"}
                alt="icon"
              />
              <div
                className="textDiv"
                onClick={() =>
                  handleUrlClick(
                    "https://shubham-pawar9.github.io/elevator-2-lifts/"
                  )
                }
              >
                <span className="mobOnlyText">
                  <a
                    href="https://shubham-pawar9.github.io/elevator-2-lifts/"
                    target="_blank"
                  >
                    Elevator 2 Lift Demo Template
                  </a>
                </span>
                <span className="desktopOnlyText">
                  Elevator 2 Lift Demo Template
                </span>
                <span>
                  Technologies - HTML: Used to structure the content and
                  elements of the web page. CSS: Employed for styling the user
                  interface, including responsive design, animations, and
                  interactive components. JavaScript: Implemented to manage
                  elevator logic, floor selection, animation triggers, and sound
                  effects.
                </span>
              </div>
            </div>
            <div className="introduction">
              <img
                src={process.env.PUBLIC_URL + "/images/table.png"}
                alt="icon"
              />
              <div
                className="textDiv"
                onClick={() =>
                  handleUrlClick(
                    "https://shubham-pawar9.github.io/excel-to-table/"
                  )
                }
              >
                <span className="mobOnlyText">
                  <a
                    href="https://shubham-pawar9.github.io/excel-to-table/"
                    target="_blank"
                  >
                    Excel to Table Conversion
                  </a>
                </span>
                <span className="desktopOnlyText">
                  Excel to Table Conversion
                </span>
                <span>
                  Technologies - HTML and CSS: The project uses HTML and CSS for
                  creating the web page layout and styling. JavaScript:
                  JavaScript is employed for handling file uploads, Excel data
                  processing, table creation, JSON conversion, and file saving.
                  react-excel-renderer : ExcelRenderer used for reading and
                  processing Excel files. JSON.stringify: This JavaScript method
                  is used to convert JavaScript objects to JSON strings for
                  saving.
                </span>
              </div>
            </div>
            <div className="introduction">
              <img
                src={process.env.PUBLIC_URL + "/images/news.png"}
                alt="icon"
              />
              <div
                className="textDiv"
                onClick={() =>
                  handleUrlClick(
                    "https://shubham-pawar9.github.io/news-application/"
                  )
                }
              >
                <span className="mobOnlyText">
                  <a
                    href="https://shubham-pawar9.github.io/news-application/"
                    target="_blank"
                  >
                    News Application UI Template
                  </a>
                </span>
                <span className="desktopOnlyText">
                  News Application UI Template
                </span>
                <span>
                  Technologies - React.js: The entire News Application is built
                  using the React.js library. use real time API to get the news
                  data and fetch this as per country wise and display on the web
                  page. Create this UI with a responsive to all devices.
                </span>
              </div>
            </div>
            <div className="introduction">
              <img
                src={process.env.PUBLIC_URL + "/images/list.png"}
                alt="icon"
              />
              <div
                className="textDiv"
                onClick={() =>
                  handleUrlClick(
                    "https://shubham-pawar9.github.io/employee-task-list/"
                  )
                }
              >
                <span className="mobOnlyText">
                  <a
                    href="https://shubham-pawar9.github.io/employee-task-list/"
                    target="_blank"
                  >
                    Employee Task List UI Template
                  </a>
                </span>
                <span className="desktopOnlyText">
                  Employee Task List UI Template
                </span>
                <span>
                  Technologies - React.js: The frontend is built using React.js,
                  ensuring a dynamic and interactive user interface. Node.js:
                  The backend logic is implemented using Node.js to manage data
                  storage and retrieval. JSON: JSON files are utilized for
                  storing employee data and task details.
                </span>
              </div>
            </div>
            <div className="introduction">
              <img
                src={process.env.PUBLIC_URL + "/images/piano.png"}
                alt="icon"
              />
              <div
                className="textDiv"
                onClick={() =>
                  handleUrlClick("https://shubham-pawar9.github.io/piano/")
                }
              >
                <span className="mobOnlyText">
                  <a
                    href="https://shubham-pawar9.github.io/piano/"
                    target="_blank"
                  >
                    Piano
                  </a>
                </span>
                <span className="desktopOnlyText">Piano</span>
                <span>
                  Technologies - HTML: Used for creating the basic structure and
                  elements of the web page. CSS: Employed for styling the visual
                  elements, layout, and animations of the piano keys.
                  JavaScript: Implemented to handle user interactions, play
                  sound effects, and manage the piano's behavior.
                </span>
              </div>
            </div>
            <div className="introduction">
              <img
                src={process.env.PUBLIC_URL + "/images/lenovo.png"}
                alt="icon"
              />
              <div
                className="textDiv"
                onClick={() =>
                  handleUrlClick(
                    "https://shubham-pawar9.github.io/virtual-smart-watch/"
                  )
                }
              >
                <span className="mobOnlyText">
                  <a
                    href="https://shubham-pawar9.github.io/virtual-smart-watch/"
                    target="_blank"
                  >
                    Virtual Smart Watch
                  </a>
                </span>
                <span className="desktopOnlyText">Virtual Smart Watch</span>
                <span>
                  Technologies - React.js: The Visual Smart Watch is built using
                  the React.js library. Using real time data of date and day.
                  Also use stopwatch functionaliy and create both analog and
                  digital dial UI. Create this app with a responsive to all
                  devices.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Projects;
