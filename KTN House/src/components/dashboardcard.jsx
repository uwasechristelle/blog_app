import React from "react";
// import picture from "../assets/coffee.jpg";
// import profile from "../assets/morgan.jpg";
import "./dashboardcard.css";

import { Link } from "react-router-dom";

const Dashboardcard = ({ key, title, bg, profile, edit, delet }) => {
  return (
    // <Link to="/single">
    <div className="post" key={key}>
      <div className="image-container">
        <img src={bg} alt="" className="fi-img" />
      </div>
      <div className="second-img">
        <img src={profile} alt="" />
      </div>
      <h4 className="text">{title}</h4>

      <div className="dashboard">
        <p>{edit}</p>
        <p>{delet}</p>
      </div>
    </div>
    // </Link>
  );
};

export default Dashboardcard;
