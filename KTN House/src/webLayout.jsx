import React from "react";
import { Outlet } from "react-router-dom";
import Topbar from "./topbar/Topbar";
import Footer from "./components/footer/footer";
export const WebLayout = () => {
  return (
    <>
      <Topbar />
      <Outlet />
      <Footer />
    </>
  );
};
