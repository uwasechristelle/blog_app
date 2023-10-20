import React from "react";
import Dashboardcard from "../../components/dashboardcard";
import "./dashboard.css";
import { Link } from "react-router-dom";

function Dashboard() {
  const Posts = [
    {
      title:
        "Instead of going out to dinner, buy good food. Cooking at home shows such affection. In a bad economy, it's more important to make yourself feel good.",
      profile:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
      background:
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZhc2hpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",

      edit: "Edit",
      delet: "Delete",
    },
    {
      title:
        "Instead of going out to dinner, buy good food. Cooking at home shows such affection. In a bad economy, it's more important to make yourself feel good.",
      profile:
        "https://images.unsplash.com/photo-1652285033500-eeafdb2c0b69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJveSUyMHBpY3R1cmVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
      background:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fGdpcmx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
      edit: "Edit",
      delet: "Delete",
    },
    {
      title:
        "Instead of going out to dinner, buy good food. Cooking at home shows such affection. In a bad economy, it's more important to make yourself feel good.",
      profile:
        "https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
      background:
        "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",

      edit: "Edit",
      delet: "Delete",
    },
    {
      title:
        "Instead of going out to dinner, buy good food. Cooking at home shows such affection. In a bad economy, it's more important to make yourself feel good. ",
      profile:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
      background:
        "https://images.unsplash.com/photo-1533546922627-479ac41b2239?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      edit: "Edit",
      delet: "Delete",
    },
    {
      title:
        " Instead of going out to dinner, buy good food. Cooking at home shows such affection. In a bad economy, it's more important to make yourself feel good. ",
      profile:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW5zdGFncmFtJTIwcHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
      background:
        "https://images.unsplash.com/photo-1580651214613-f4692d6d138f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGZhc2hpb24lMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
      edit: "Edit",
      delet: "Delete",
    },
    {
      title:
        "Instead of going out to dinner, buy good food. Cooking at home shows such affection. In a bad economy, it's more important to make yourself feel good. ",
      profile:
        "https://images.unsplash.com/photo-1652285033911-53b3885984a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJveSUyMHBpY3R1cmVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
      background:
        "https://images.unsplash.com/photo-1617074064870-7210b4059fc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGhvdG8lMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
      edit: "Edit",
      delet: "Delete",
    },
  ];

  return (
    <>
      <div className="add">
        <Link to="Write">
        <button>+NewPost</button>
        </Link>
      </div>
      <div className="body">
        {Posts.map((post, index) => (
          <Dashboardcard
            key={index}
            title={post.title}
            profile={post.profile}
            bg={post.background}
            edit={post.edit}
            delet={post.delet}
          />
        ))}
      </div>
    </>
  );
}
export default Dashboard;
