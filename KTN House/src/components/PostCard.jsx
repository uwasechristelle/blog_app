import React from "react";
import { FcLike } from "react-icons/fc";
import { FaComment } from "react-icons/fa";
import { IoIosEye } from "react-icons/io";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./PostCard.css";
import { Link } from "react-router-dom";

const PostCard = ({ id, title, description, image, comment }) => {
  return (
    <div className="post">
      <div className="image-container">
        <img src={image} alt="" className="fi-img" />
      </div>
      <div className="post-body">
        <div>
          <h4 className="text">{title}</h4>
        </div>
        <div className="desc-cont">
          <p>{description}</p>
        </div>
      </div>
      <div>
        <Link to={`/single/${id}`}>
          <button className="btn-read">Read More</button>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
