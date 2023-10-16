import "./contact.css";
// import React from "react";

const Contact = () => {
  return (
    <div className=" row-contact">
      <div className="col-1">
        <h3>Contact Us</h3>
        <div className="field">
          <input type="text" name="Name" placeholder="Your Names" required="" />
        </div>
        <div className="field">
          <input
            type="email"
            name="Email"
            placeholder="Your Email Address"
            required=""
          />
        </div>
        <div class="field">
          <textarea
            name="Message"
            id=""
            cols="30"
            rows="9"
            placeholder="Enter Message Here..."
            required=""></textarea>
        </div>
        <div className="btn-send">
          <button>Send Message</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
