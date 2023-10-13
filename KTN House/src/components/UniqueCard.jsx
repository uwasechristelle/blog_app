import React from "react";
import picture from "../assets/coffee.jpg";
import profile from "../assets/morgan.jpg";

import { FcLike } from "react-icons/fc";
import { FaComment } from "react-icons/fa";
import { IoIosEye } from "react-icons/io";

const UniqueCard = () => {
  return (
    <div className="post unique">
      <img src={picture} alt="" className="fi-img" />
      <div className="details">
        <div className="second-img">
          <img src={profile} alt="" />
        </div>
        <h3>Health</h3>
        <h4 className="text">
          One cannot think well, love well, sleep well, if one has not dined
          well
        </h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis,
          quos molestias, eveniet esse, voluptatum.
        </p>
        <div className="button">
          <div className="btn1">
            <FcLike />
            <p>57</p>
          </div>
          <div className="btn1">
            <FaComment />
            <p>57</p>
          </div>
          <div className="btn1">
            <IoIosEye />
            <p>57</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniqueCard;
