import React, { useState } from "react";
import "./account.css";
import { Link } from "react-router-dom";
export const Account = ({ click }) => {
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const signupinfo = { fname, lname, email, password };

  const handlesignup = async (signupData) => {
    try {
      const response = await fetch(
        "https://lastlast.onrender.com/api/users/signUp/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(signupData),
        }
      );

      if (response.ok) {
        const responseData = await response.json();
        console.log("response", responseData);
        alert("USER registered succesfully");
        setfname("");
        setlname("");
        setemail("");
        setpassword("");
      } else {
        console.log("Failed to register your INFO");
        setfname("");
        setlname("");
        setemail("");
        setpassword("");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="account-container">
      <div className="col-account">
        <h3>Create Account</h3>
        <div className="account1">
          <input
            type="text"
            name="Name"
            placeholder="FirstName"
            required=""
            value={fname}
            onChange={(e) => setfname(e.target.value)}
          />
        </div>
        <div className="account1">
          <input
            type="text"
            name="Name"
            placeholder="LastName"
            required=""
            value={lname}
            onChange={(e) => setlname(e.target.value)}
          />
        </div>
        <div className="login1">
          <input
            type="email"
            name="email"
            placeholder="Email"
            required=""
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </div>
        <div className="login1">
          <input
            type="password"
            name="password"
            placeholder="Password"
            required=""
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>
        <div>
          <button
            className="btn-account"
            onClick={(e) => {
              e.preventDefault();
              handlesignup(signupinfo);
            }}>
            SignUp
          </button>
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
