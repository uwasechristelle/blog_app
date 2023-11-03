import React from "react";
import Dashboard from "./dashboard";
import { Sidebar } from "./Sidebar";
import { Outlet } from "react-router-dom";
export const DashLayout = () => {
  return (
    <>
      {" "}
      <Sidebar />
      <div className="page-container">
        <Outlet />
      </div>
    </>
  );
};
