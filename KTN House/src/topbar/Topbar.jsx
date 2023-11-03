import "./topbar.css";
import picture from "../assets/menu.png";
import { AiOutlineSearch } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import { FaWindowClose } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Login } from "../pages/Logins/Login";
import { Account } from "../pages/Register/account";
export default function Topbar() {
  const [login, setLogin] = useState(false);
  const [account, setAccount] = useState(false);

  const handleLogin = () => {
    setLogin(!login);
    setAccount(false);
  };

  const handleAccount = () => {
    setAccount(!account);
    setLogin(false);
  };

  const [menu, setMenu] = useState(false);
  
  const Handlemenu = () => {
    setMenu((prev) => !prev);
  };
  return (
    <>
      <nav className="nav-container">
        <div className="logo">
          KTN HOUSE
        </div>
        <div className="nav-btn">
          <ul>
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
        <Link onClick={handleLogin}>
          <div className="login">
            <img
              src="https://images.unsplash.com/photo-1643793571490-2ef3090d0aa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y3VwJTIwb2YlMjBjb2ZmZWUlMjB3aXRoJTIwbG9nbyUyMG9mJTIwbG92ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
              alt=""
            />
          </div>
        </Link>
        <div className="menuBtn" onClick={Handlemenu}>
          <img src={picture} id="menu" />
        </div>
      </nav>

      {menu && (
        <div className="menu">
          <Link to="/" onClick={Handlemenu}>
            <li>Home</li>
          </Link>
          <Link to="/About" onClick={Handlemenu}>
            <li>About</li>
          </Link>
          <Link to="/Contact" onClick={Handlemenu}>
            <li>Contact</li>
          </Link>
        </div>
      )}

      {login && (
        <div className="modal-container">
          <button onClick={handleLogin} className="modalBtn">
            <FaWindowClose className="m-icon" />
          </button>
          <Login click={handleAccount} close={() => setLogin(false)} />
        </div>
      )}

      {account && (
        <div className="modal-container">
          <button onClick={handleAccount} className="modalBtn">
            <FaWindowClose className="m-icon" />
          </button>
          <Account click={handleLogin} />
        </div>
      )}
    </>
  );
}
