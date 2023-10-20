import { Link } from "react-router-dom";
import { FaWindowClose } from "react-icons/fa";
import "./Login.css";
import { Account } from "../../pages/Register/account";

export const Login = ({ click, close }) => {
  return (
    <div className="lgn-container">
      <div className="col-login">
        <h3>Hello! Welcome Back</h3>
        <div className="login1">
          <input type="text" name="Name" placeholder="Username" required="" />
        </div>
        <div className="login1">
          <input
            type="password"
            name="password"
            placeholder="Password"
            required=""
          />
        </div>
        <div className="btn-login">
          <Link to="dashboard" onClick={close}>
          <button>Login</button>
          </Link>
        </div>
        <div className="accaunt" onClick={click}>
          <h5>Create an account</h5>
        </div>
      </div>
    </div>
  );
};
