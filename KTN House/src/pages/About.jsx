import "./about.css";
// import React from "react";
import img from "../assets/laptop.jpg";
import ifoto from "../assets/girl.jpg";
import { FaBusinessTime } from "react-icons/fa";
import { BsCalendarEventFill } from "react-icons/bs";
import { BiLogoCreativeCommons } from "react-icons/bi";

const About = () => {
  return (
    <div className="about-section">
      <div className="aaba">
        <p>Fashion is like eating, you shouldn't stick to the same menu.</p>
      </div>
      <div className="about">
        <div className="imaje">
          <div className="abt-img1">
            <img
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D&w=600"
              alt=""
            />
          </div>
          <div className="abt-img2">
            <img
              src={
                "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
              }
              alt=""
            />
          </div>
        </div>
        <div className="abt">
          <div className="abttext">
            <h5>WHO WE ARE</h5>
          </div>
          <div className="abttext">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consequuntur sapiente aliquid illum atque possimus unde nihil,
              eius, aliquam animi aspernatur ipsum ex inventore illo, obcaecati
              fugit perferendis eum deserunt? Ab eum quidem culpa quas odio est
              autem modi voluptatum optio amet, facere beatae ea magnam,
              suscipit tempora. Perspiciatis, adipisci! Earum.
            </p>
          </div>
          <div className="time">
            <div className="open">
              <h4>Opening Days</h4>
            </div>
            <div className="open2">
              <p>Mon-Sun:8am-12pm</p>
            </div>
          </div>
          <div className="abt-time">
            <div className="second-col">
              <h1 className="gett">Get In Touch</h1>
              <div className="get">
                <div className="firstget">
                  <div className="gettime">
                    <p>Tel:</p>
                  </div>
                  <div className="gettime2">
                    <p>Email:</p>
                  </div>
                </div>
                <div className="secondget">
                  <div className="gettime3">
                    <p>+250 722 222 222</p>
                  </div>
                  <div className="gettime4">
                    <p>ktncompany@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="our-service">
        <h5 className="service-title">Our Services</h5>
      </div>
      <div className="ourservices-container">
        <div className="services">
          <div className="icon-service">
            <BiLogoCreativeCommons />
          </div>
          <div className="service-body">
            <h5>Creative Services</h5>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
              eos magnam repellat molestiae beatae quam aut id non voluptas
              similique!
            </p>
          </div>
        </div>
        <div className="ourservices">
          <div className="services">
            <div className="icon-service">
              <FaBusinessTime />
            </div>
            <div className="service-body">
              <h5>Meeting Business</h5>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
                eos magnam repellat molestiae beatae quam aut id non voluptas
                similique!
              </p>
            </div>
          </div>
        </div>
        <div className="ourservices">
          <div className="services">
            <div className="icon-service">
              <BsCalendarEventFill />
            </div>
            <div className="service-body">
              <h5>Event Planning</h5>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
                eos magnam repellat molestiae beatae quam aut id non voluptas
                similique!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
