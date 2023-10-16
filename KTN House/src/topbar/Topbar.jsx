import "./topbar.css";
import pic from "../assets/Rectangle.jpg";
import { AiOutlineSearch } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";
export default function Topbar() {
  return (
    <>
      <nav className="nav-container">
        <div className="nav-btn">
          <ul>
            {/* <li>KTN</li> */}
            <li>
              <Link to="/" className="ktn" exact>
                KTN
              </Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="search-btn">
          <AiOutlineSearch />
          <input type="text" placeholder="Search here............." />
        </div>
        <Link to="/Login">
          <div className="login">
            <img
              src="https://images.unsplash.com/photo-1643793571490-2ef3090d0aa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y3VwJTIwb2YlMjBjb2ZmZWUlMjB3aXRoJTIwbG9nbyUyMG9mJTIwbG92ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
              alt=""
            />
          </div>
        </Link>
      </nav>
      <div className="menu ">
        <BiMenu />
      </div>
      <div className="img">
        <h1>Home</h1>
      </div>
    </>
  );
}
