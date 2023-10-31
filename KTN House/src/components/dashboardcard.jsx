import React, { useEffect, useState } from "react";
import "./dashboardcard.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const Dashboardcard = ({
  id,
  title,
  image,
  profile,
  views,
  description,
  edit,
  delet,
}) => {
  // console.log(id);
  const token = localStorage.getItem("token");
  console.log("Token =", token);
  const configuration = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const handleLogin = () => {};

  // function update() {
  //   const { id } = useParams();
  //   useEffect(() => {
  //     axios
  //       .get(`https://lastlast.onrender.com/api/post/update/${id}`)
  //       .then((res) => console.log(res))
  //       .catch((err) => console.log(err));
  //   }, []);
  // }
  function deleter() {
    axios
      .delete(
        `https://lastlast.onrender.com/api/post/delete/${id}`,
        configuration
      )
      .then(() => {
        alert("Blog deleted successfully");
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
        alert("failed to delete data");
      });
  }
  return (
    <div className="post">
      <div className="image-container">
        <img src={image} alt="" className="fi-img" />
      </div>
      <div className="second-img">
        <img src={profile} alt="" />
      </div>
      <h4 className="text">{title}</h4>
      <h4 className="text-desc">{description}</h4>
      <div className="edit_delete">
        <button className="views">
          <FaRegEye /> {views}
        </button>
        <Link to={`/update/${id}`}>
          <button className="dashboard">Edit</button>
        </Link>
        <button className="dashboard1" onClick={deleter}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Dashboardcard;
