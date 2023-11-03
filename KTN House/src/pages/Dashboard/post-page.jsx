import React from "react";
import { useEffect, useState } from "react";
import "./post-page.css";
import { BsFillPostcardFill } from "react-icons/bs";
import { FaComment } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import Barchart from "../../barchart/Barchart";

export const Postpage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://lastlast.onrender.com/api/post/posts")
      .then((response) => response.json())
      .then((res) => {
        if (res.data) {
          setPosts(res.data);
        }
      });
  }, []);
  return (
    <>
      <div className="dashboard-container">
        <div className="dashboard-cardcontainer">
          <div className="dashboard-card DodgerBlue">
            <div>
              <h3>{posts.length}</h3>
              <p>Total Post</p>
            </div>
            <div className="dash-card-icon">
              <BsFillPostcardFill />
            </div>
          </div>
          <div className="dashboard-card Orange">
            <div>
              <h3>150+</h3>
              <p>Total Comment</p>
            </div>
            <div className="dash-card-icon">
              <FaComment />
            </div>
          </div>

          <div className="dashboard-card SlateBlue">
            <div>
              <h3>150+</h3>
              <p>Total Users</p>
            </div>
            <div className="dash-card-icon">
              <FaUsers />
            </div>
          </div>
          <div className="dashboard-card MediumSeaGreen">
            <div>
              <h3>150+</h3>
              <p>Total Views</p>
            </div>
            <div className="dash-card-icon">
              <FaEye />
            </div>
          </div>
        </div>
      </div>
      <Barchart />
    </>
  );
};
