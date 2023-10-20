import React from "react";
// import picture from "../assets/coffee.jpg";
// import profile from "../assets/morgan.jpg";

import { FcLike } from "react-icons/fc";
import { FaComment } from "react-icons/fa";
import { IoIosEye } from "react-icons/io";
import { Link } from "react-router-dom";

const PostCard = ({ title, description, image, comment }) => {
  return (
    <div className="post" >
      <div className="image-container">
        <img src={image} alt="" className="fi-img" />
      </div>
      <div className="desc-cont">
        <p>{description}</p>
      </div>
      
      <h4 className="text">{title}</h4>
      {/* <div className="button">
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
        <div className="dashboard">
          <p>{edit}</p>
          <p>{delet}</p>
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default PostCard;
