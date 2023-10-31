// import React from "react";
import Dashboardcard from "../../components/dashboardcard";
import React, { useEffect, useState } from "react";
import "./dashboard.css";
import { Link } from "react-router-dom";

function Dashboard({ click }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://lastlast.onrender.com/api/post/adminPosts", {
      method: "get",
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.data) {
          setPosts(res.data);
          console.log(res.data);
        }
      });
  }, []);

  return (
    <>
      <div className="dash-container">
        <Link to="/Addblog">
          <div className="add">
            <button>Add NewPost</button>
          </div>
        </Link>
        <div className="body">
          {posts.map((post, index) => (
            <Dashboardcard
              key={index}
              id={post._id}
              title={post.title}
              image={post.image}
              description={post.description}
              edit={post.edit}
              delet={post.delet}
              views={post.views}
            />
          ))}
        </div>
      </div>
    </>
  );
}
export default Dashboard;
