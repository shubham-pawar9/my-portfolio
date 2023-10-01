const Cover = () => {
  const handleCallMe = () => {
    let phoneNumber = "+917843068183";
    window.location.href = "tel:" + phoneNumber;
  };
  return (
    <>
      <div id="cover" className="coverPage">
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
            <a href="./my-contact.vcf" download="shubhContact.vcf">
              <button>Add me in contacts</button>
            </a>
            <button onClick={handleCallMe}>Call me</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cover;
