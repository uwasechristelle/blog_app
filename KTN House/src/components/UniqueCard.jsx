import React from "react";
import picture from "../assets/coffee.jpg";
import profile from "../assets/morgan.jpg";

import { FcLike } from "react-icons/fc";
import { FaComment } from "react-icons/fa";
import { IoIosEye } from "react-icons/io";

const UniqueCard = ({ Data }) => {
  const blogId = Data._id;
  return (
    <div className="post unique">
      <img src={Data.image} alt="" className="fi-img" />
      <div className="details">
        <div className="second-img">
          <img src={Data.profile} alt="" />
        </div>

        <h4>{Data.title}</h4>
        <p>{Data.description}</p>
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
