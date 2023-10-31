import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
export const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <h1 className="dash-logo">KTN</h1>
        <ul className="sidebar-link-container">
          <Link to="/post-page" className="sidebar-link">
            Dashboard
          </Link>
          <Link to="/dashboard" className="sidebar-link">
            Post
          </Link>
          <Link to="/comment-page" className="sidebar-link">
            Comments
          </Link>
          <Link className="sidebar-link">Users</Link>
          <Link
            className="sidebar-link"
            onClick={() => {
              window.location = "/";
              sessionStorage.clear();

              alert("logout");
            }}>
            Logout
          </Link>
        </ul>
      </div>
    </>
  );
};
  