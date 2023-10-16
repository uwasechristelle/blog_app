import "./about.css";
// import React from "react";
import img from "../assets/laptop.jpg";
import ifoto from "../assets/girl.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="abt">
        <h3>
          <span>KTN</span> is a simple blog template that can be used for food,
          fashion, personal finance, health, hobby, corporate, or any other
          blog. It features several page and post layouts for your convenience.
        </h3>
      </div>

      <div className="imaje">
        <div className="abt-img1">
          <img src={img} alt="" />
          <p>
            “Eating is so intimate. It’s very sensual. When you invite someone
            to sit at your table and you want to cook for them, you’re inviting
            a person into your life.”
          </p>
        </div>
        <div className="abt-img2">
          <img src={img} alt="" />
          <p>Fashion is like eating, you shouldn't stick to the same menu.</p>
        </div>
        <div className="abt-img3">
          <img src={img} alt="" />
          <p></p>
        </div>
      </div>

      <div className="abt-time">
        <h4>Get In Touch</h4>
        <ul className="second-col">
          <li>Working Hours</li>
          <li>Monday to Friday:09:00am-23:00pm</li>
          <li>saturday:09:00am-12:00pm</li>
          <li>Sunday:09:00am-12:00am</li>
          <li>Your Presence brings joy to Our home</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
