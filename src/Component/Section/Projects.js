import { useEffect, useRef, useState } from "react";

const Projects = () => {
  const [projectData, setProjectData] = useState([]);
  const loaderRef = useRef();
  const [projectUrl, setProjectUrl] = useState(
    "https://shubham-pawar9.github.io/talk-dev-ChattingApp/"
  );
  const handleUrlClick = (url) => {
    loaderRef.current.style.display = "block";
    setTimeout(() => {
      loaderRef.current.style.display = "none";
    }, 2000);
    setTimeout(() => {
      setProjectUrl(url);
    }, 500);
  };
  const fetchProject = () => {
    try {
      fetch("project.json")
        .then((res) => res.json())
        .then((res) => setProjectData(res));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProject();
  }, []);
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
          <div className="fullScreen">
            <a href={projectUrl} target="_blank">
              <img
                src={process.env.PUBLIC_URL + "/images/expand.png"}
                alt="fullScreen"
                title="Explore in new Full Screen Window"
              />
            </a>
          </div>
          <div className="projectLoadingDiv" ref={loaderRef}>
            <div className="one loaderBox"></div>
            <div className="two loaderBox"></div>
            <div className="three loaderBox"></div>
            <div className="four loaderBox"></div>
          </div>
        </div>
        <div className="socialDiv">
          <h3 className="projects github">
            Explore some of my latest projects on GitHub
          </h3>
          <div className="introText">
            {projectData &&
              projectData
                .filter((item) => item.projectShow)
                .map((item) => {
                  return (
                    <div key={item.id} className="introduction">
                      <img
                        src={process.env.PUBLIC_URL + `/images/${item.icon}`}
                        alt="icon"
                      />
                      <div
                        className="textDiv"
                        onClick={() => handleUrlClick(item.link_url)}
                      >
                        <span className="mobOnlyText">
                          <a href={item.link_url} target="_blank">
                            {item.projectName}
                          </a>
                        </span>
                        <span className="desktopOnlyText">
                          {" "}
                          {item.projectName}
                        </span>
                        <span>
                          {item.technologies}
                          <br></br>
                          {item.description}
                        </span>
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Projects;
