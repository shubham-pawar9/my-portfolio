import NavigationBar2 from "../NavigationBar2";

const Cover = () => {
  return (
    <>
      <div className="coverPage">
        <div className="coverImg">
          <img src="./images/cover.jpg" alt="coverImage" />
        </div>
        <div className="coverBottom">
          <div className="profileImg">
            <img src="./images/profile.jpg" alt="profileImage" />
          </div>
          <div className="profileInfo">
            <p className="profileName">Shubham Pawar</p>
            <span className="profileSubText">Front end Developer</span>
          </div>
          <div className="coverBtn">
            <button>Add me in contacts</button>
            <button>Call me</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cover;
