import "./footer.css";
import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsPinterest } from "react-icons/bs";
import {} from "react-icons/bs";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="footer-container">
        {/* column */}
        <div className="column">
          <h1>KTN</h1>
          <p>
            Lorem ipsum dolor sit amet,
            <br />
            adipisicing. Molestias, delectus!
          </p>
          <div className="icons">
            <BsFacebook />
            <BsInstagram />
            <BsTwitter />
            <BsPinterest />
          </div>
        </div>
        <div className="col1">
          <h5>Address</h5>
          <ul className="first-col">
            <li>Kimironko,Kigali-Rwanda</li>
            <li>Call:+250 722 222 222</li>
            <li>Email:ktncompany@gmail.com</li>
          </ul>
        </div>
        <div className="col2">
          <h5>Useful Links</h5>
          <ul>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
        {/*............. column2 .....................*/}
        <div className="col3">
          <h5>Get In Touch</h5>
          <ul className="second-col">
            <li>Working Hours</li>
            <li>Monday to Friday:09:00am-23:00pm</li>
            <li>saturday & Sunday:09:00am-12:00pm</li>
            {/* <li>Sunday:09:00am-12:00am</li> */}
            <li>"Your Presence brings joy to Our home."</li>
          </ul>
        </div>
      </div>
      <div className="col4">
        <p>
          @Copy;{new Date().getFullYear()}KTN COMPANY | All right reserved |
          Terms and Service | Privacy | This template is made by{" "}
          <span>Uwase Christelle</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
