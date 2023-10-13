import React from "react";
// import picture from "../assets/coffee.jpg";
// import profile from "../assets/morgan.jpg";

import { FcLike } from "react-icons/fc";
import { FaComment } from "react-icons/fa";
import { IoIosEye } from "react-icons/io";

const PostCard = ({ key, title, bg, profile, likes, comment, views }) => {
  return (
    <div className="post" key={key}>
      <div className="image-container">
        <img src={bg} alt="" className="fi-img" />
      </div>
      <div className="second-img">
        <img src={profile} alt="" />
      </div>
      <h4 className="text">{title}</h4>
      <div className="button">
        <div className="btn1">
          <FcLike />
          <p>{likes}</p>
        </div>
        <div className="btn1">
          <FaComment />
          <p>{comment}</p>
        </div>
        <div className="btn1">
          <IoIosEye />
          <p>{views}</p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
