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
      <div className="projectsMainDiv">
        <div className="infoDiv">
          <h3>Projects</h3>
          <iframe
            id="projectIframe"
            width="100%"
            height="100%"
            src={projectUrl}
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
        <div className="socialDiv">
          <h3>Explore some of my latest projects on GitHub</h3>
          <div className="introText">
            <div className="introduction">
              <img src="./images/ai-tool.png" alt="icon" />
              <div
                className="textDiv"
                onClick={() =>
                  handleUrlClick(
                    "https://shubham-pawar9.github.io/ai-tool-shunu/"
                  )
                }
              >
                <span>AI-TOOL-(AI Assistant)</span>
                <span>
                  Technologies - React.js: The entire AI assistant is built
                  using the React.js library, ensuring a modular,
                  component-based structure and dynamic UI updates.
                </span>
              </div>
            </div>
            <div className="introduction">
              <img src="./images/elevator.png" alt="icon" />
              <div
                className="textDiv"
                onClick={() =>
                  handleUrlClick(
                    "https://shubham-pawar9.github.io/elevator-2-lifts/"
                  )
                }
              >
                <span>Elevator 2 Lift Demo Template</span>
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
              <img src="./images/table.png" alt="icon" />
              <div
                className="textDiv"
                onClick={() =>
                  handleUrlClick(
                    "https://shubham-pawar9.github.io/excel-to-table/"
                  )
                }
              >
                <span>Excel to Table Conversion</span>
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
              <img src="./images/news.png" alt="icon" />
              <div
                className="textDiv"
                onClick={() =>
                  handleUrlClick(
                    "https://shubham-pawar9.github.io/news-application/"
                  )
                }
              >
                <span>News Application UI Template</span>
                <span>
                  Technologies - React.js: The entire News Application is built
                  using the React.js library. use real time API to get the news
                  data and fetch this as per country wise and display on the web
                  page. Create this UI with a responsive to all devices.
                </span>
              </div>
            </div>
            <div className="introduction">
              <img src="./images/list.png" alt="icon" />
              <div
                className="textDiv"
                onClick={() =>
                  handleUrlClick(
                    "https://shubham-pawar9.github.io/employee-task-list/"
                  )
                }
              >
                <span>Employee Task List UI Template</span>
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
              <img src="./images/piano.png" alt="icon" />
              <div
                className="textDiv"
                onClick={() =>
                  handleUrlClick("https://shubham-pawar9.github.io/piano/")
                }
              >
                <span>Piano</span>
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
              <img src="./images/lenovo.png" alt="icon" />
              <div
                className="textDiv"
                onClick={() =>
                  handleUrlClick(
                    "https://shubham-pawar9.github.io/virtual-smart-watch/"
                  )
                }
              >
                <span>Virtual Smart Watch</span>
                <span>Technologies -</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Projects;
