import React from "react";
import "./account.css";
import { Link } from "react-router-dom";
export const Account = ({ click }) => {
  return (
    <div className="account-container">
      <div className="col-account">
        <h3>Create Account</h3>
        <div className="account1">
          <input type="text" name="Name" placeholder="Fullname" required="" />
        </div>
        <div className="login1">
          <input type="email" name="email" placeholder="Email" required="" />
        </div>
        <div className="login1">
          <input
            type="password"
            name="password"
            placeholder="Password"
            required=""
          />
        </div>
        <div className="btn-account">
          <button>SignUp</button>
        </div>
        <div className="account">
          <div className="account1">
            <h5>Already have an account</h5>
          </div>
          <div className="account2" onClick={click}>
            <h5>|Login</h5>
          </div>
        </div>
      </div>
    </div>
  );
};
