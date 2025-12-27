const About = () => {
  return (
    <>
      <div id="about" className="aboutMainDiv allMainDiv">
        <div className="infoDiv">
          <h3 className="about">Intro</h3>
          <div className="introText">
            <div className="introduction">
              <img
                src={process.env.PUBLIC_URL + "/images/work.png"}
                alt="icon"
              />
              <div className="textDiv">
                <span className="company post work">
                  React JS Developer at{" "}
                  <a href="https://prometteursolutions.com/" target="_blank">
                    Prometteur Solutions
                  </a>
                </span>
                <span>April 03, 2024 - Present · Pune, Maharashtra</span>
              </div>
            </div>
            <div className="introduction">
              <img
                src={process.env.PUBLIC_URL + "/images/work.png"}
                alt="icon"
              />
              <div className="textDiv">
                <span className="company post work">
                  Web Application Developer at{" "}
                  <a href="https://www.hmxmedia.com/" target="_blank">
                    HMX Media
                  </a>
                </span>
                <span>
                  December 21, 2020 - March 15, 2024 · Pune, Maharashtra
                </span>
              </div>
            </div>
            <div className="introduction">
              <img
                src={process.env.PUBLIC_URL + "/images/work.png"}
                alt="icon"
              />
              <div className="textDiv">
                <span>
                  Former Condition Monitoring Engineer at Proact Spectra Tech
                  Consultant Pvt Ltd
                </span>
                <span>December 2018 - December 2020 · Satara</span>
              </div>
            </div>
            <div className="introduction">
              <img
                src={process.env.PUBLIC_URL + "/images/study.png"}
                alt="icon"
              />
              <div className="textDiv">
                <span className="education collage">
                  Studied BE Mechanical at YSPM YTC college of Engineering
                  satara
                </span>
                <span>Attended from 2014 to 2018</span>
              </div>
            </div>
            <div className="introduction">
              <img
                src={process.env.PUBLIC_URL + "/images/study.png"}
                alt="icon"
              />
              <div className="textDiv">
                <span className="education collage">
                  Studied Diploma in Mechanical at Gaurishankar Polytechnic
                  Satara
                </span>
                <span>Attended from 2011 to 2014</span>
              </div>
            </div>
            <div className="introduction">
              <img
                src={process.env.PUBLIC_URL + "/images/location.png"}
                alt="icon"
              />
              <div className="textDiv">
                <span>
                  From{" "}
                  <a href="https://www.satara.gov.in/en/" target="_blank">
                    Satara
                  </a>
                </span>
              </div>
            </div>
            <div className="introduction">
              <img
                src={process.env.PUBLIC_URL + "/images/status.png"}
                alt="icon"
              />
              <div className="textDiv">
                <span>Married</span>
              </div>
            </div>
          </div>
        </div>
        <div className="socialDiv">
          <h3>Website And Social Links</h3>
          <div className="introText">
            {/* <div className="introduction">
              <img
                src={process.env.PUBLIC_URL + "/images/link.png"}
                alt="icon"
              />
              <div className="textDiv">
                <span>
                  <a href="https://shubham-pawar9.netlify.app/" target="_blank">
                    https://shubham-pawar9.netlify.app/
                  </a>
                </span>
                <span className="website">Website</span>
              </div>
            </div> */}
            <div className="introduction">
              <img
                src={process.env.PUBLIC_URL + "/images/instagram.png"}
                alt="icon"
              />
              <div className="textDiv">
                <span>
                  <a
                    href="https://www.instagram.com/pshubham9/"
                    target="_blank"
                  >
                    pshubham9
                  </a>
                </span>
                <span className="instagram">Instagram</span>
              </div>
            </div>
            <div className="introduction">
              <img
                src={process.env.PUBLIC_URL + "/images/facebook.png"}
                alt="icon"
              />
              <div className="textDiv">
                <span>
                  <a
                    href="https://www.facebook.com/shubham.pawar.773776/"
                    target="_blank"
                  >
                    Shubham Pawar
                  </a>
                </span>
                <span className="facebook">Facebook</span>
              </div>
            </div>
            <div className="introduction">
              <img
                src={process.env.PUBLIC_URL + "/images/youtube.png"}
                alt="icon"
              />
              <div className="textDiv">
                <span>
                  <a href="https://www.youtube.com/@pshubham9" target="_blank">
                    pshubham 9
                  </a>
                </span>
                <span>Youtube</span>
              </div>
            </div>
            <div className="introduction">
              <img
                src={process.env.PUBLIC_URL + "/images/twitter.png"}
                alt="icon"
              />
              <div className="textDiv">
                <span>
                  <a href="https://twitter.com/pshubham_9" target="_blank">
                    pshubham_9
                  </a>
                </span>
                <span className="twitter">Twitter</span>
              </div>
            </div>
            <div className="introduction">
              <img
                src={process.env.PUBLIC_URL + "/images/email.png"}
                alt="icon"
              />
              <div className="textDiv">
                <span className="mail">shubhpawar9596@gmail.com</span>
                <span>Email</span>
              </div>
            </div>
            <div className="introduction">
              <img
                src={process.env.PUBLIC_URL + "/images/phone.png"}
                alt="icon"
              />
              <div className="textDiv">
                <span>07843068183</span>
                <span className="mobile">Mobile</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
