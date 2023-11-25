import { NavLink } from "react-router-dom";
import NavigationBar from "../NavigationBar";
import { useState } from "react";
const Cover = ({ handleShowCV }) => {
  const handleCallMe = () => {
    let phoneNumber = "+917843068183";
    window.location.href = "tel:" + phoneNumber;
  };
  return (
    <>
      <div id="cover" className="coverPage profile allMainDiv">
        <div className="coverImg">
          <img
            src={process.env.PUBLIC_URL + "/images/cover.jpg"}
            alt="coverImage"
          />
        </div>
        <div className="coverBottom">
          <div className="profileImg">
            <img
              src={process.env.PUBLIC_URL + "/images/profile.jpg"}
              alt="profileImage"
            />
          </div>
          <div className="profileInfo">
            <p className="profileName">Shubham Pawar</p>
            <span className="profileSubText">Front end Developer</span>
          </div>
          <div className="coverBtn">
            {/* <a href="./my-contact.vcf" download="shubhContact.vcf">
              <button>Add me in contacts</button>
            </a> */}
            {/* <NavLink to={`/my-blogs`}>
              <button className="myBlogs" style={{ display: "none" }}>
                My Blogs
              </button>
            </NavLink> */}

            <button className="call" onClick={handleCallMe} title="Call me">
              <span>Call me</span>
              <img
                src={process.env.PUBLIC_URL + "/images/call-me.png"}
                alt="call"
              />
            </button>
            <button
              className="cv-show"
              onClick={handleShowCV}
              title="Download CV"
            >
              <span>Download CV</span>
              <img
                src={process.env.PUBLIC_URL + "/images/resume.png"}
                alt="resume"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cover;
