import "./topbar.css";
import pic from "../assets/Rectangle 10.jpg";
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
      </nav>
      <div className="menu ">
        <BiMenu />
      </div>
      <div className="img">
        <img src={pic} alt="" />
      </div>
    </>
  );
}
