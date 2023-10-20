import "./contact.css";
import pic from "../assets/laptop.jpg";
// import React from "react";

const Contact = () => {
  return (
    <div className="row-contact">
      <div className="contact-image">
        <img
          src={
            "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvbnRhY3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
          }
          alt=""
        />
      </div>
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
