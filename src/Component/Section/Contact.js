const Contact = () => {
  function Submit(e) {
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbz-sRuhW2ae3eP57TvS5etL2cotkgfGmf41BwkslBYVqRExKz08LWcwm5z5LC0UGwZW/exec",
      {
        method: "POST",
        body: formDatab,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <>
      <div id="contact" className="contactMainDiv allMainDiv">
        <div className="infoDiv">
          <h3 className="contact">Contact Us</h3>
          <form className="form" onSubmit={(e) => Submit(e)}>
            <div className="form-text">
              <label>Name</label>
              <input placeholder="Your Name" name="Name" type="text" />
            </div>
            <div className="form-text">
              <label>Email</label>
              <input placeholder="Your Email" name="Email" type="email" />
            </div>
            <div className="form-text">
              <label>Mobile</label>
              <input placeholder="Your Mobile" name="Mobile" type="number" />
            </div>
            <div className="form-text">
              <label className="message">Message</label>
              <input placeholder="Your Message" name="Message" type="text" />
            </div>
            <input type="submit" className="submitBtn" />
          </form>
        </div>
        <div className="socialDiv">
          <div className="introText">
            <h2>
              Code
              <br /> Create
              <br /> Inspire
            </h2>
            <h3>Unveiling My Portfolio.</h3>
            {/* <div className="introduction">
              <img
                src={process.env.PUBLIC_URL + "/images/location.png"}
                alt="icon"
              />
              <div className="textDiv">
                <span>Address</span>
                <span>Sangam Mahuli, Satara, Maharashtra</span>
              </div>
            </div> */}
            {/* <div className="endTextDiv">
              <h2>Thank You for Visiting Us.</h2>
            </div> */}
          </div>
          <div className="bottomTxt">
            <span className="designed">Designed and Developed by</span>
            <span>Shubham Pawar</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
