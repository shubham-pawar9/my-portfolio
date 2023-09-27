const About = () => {
  return (
    <>
      <div className="aboutMainDiv">
        <div className="infoDiv">
          <h3>Intro</h3>
          <div className="introText">
            <div className="introduction">
              <img src="./images/work.png" alt="icon" />
              <span>
                Web Application Developer at{" "}
                <a href="https://www.hmxmedia.com/" target="_blank">
                  HMX Media
                </a>
              </span>
            </div>
            <div className="introduction">
              <img src="./images/work.png" alt="icon" />
              <span>
                Former Condition Monitoring Engineer at Proact Spectra Tech
                Consultant Pvt Ltd
              </span>
            </div>
            <div className="introduction">
              <img src="./images/study.png" alt="icon" />
              <span>
                Studied BE Mechanical at YSPM YTC college of Engineering satara
              </span>
            </div>
            <div className="introduction">
              <img src="./images/study.png" alt="icon" />
              <span>
                Studied Diploma in Mechanical at Gaurishankar Polytechnic Satara
              </span>
            </div>
            <div className="introduction">
              <img src="./images/location.png" alt="icon" />
              <span>
                From{" "}
                <a href="https://www.satara.gov.in/en/" target="_blank">
                  Satara
                </a>
              </span>
            </div>
            <div className="introduction">
              <img src="./images/status.png" alt="icon" />
              <span>Married</span>
            </div>
          </div>
        </div>
        <div className="socialDiv"></div>
      </div>
    </>
  );
};
export default About;
