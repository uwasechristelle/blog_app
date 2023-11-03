import { Link } from "react-router-dom";
import { BsEyeFill } from "react-icons/bs";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { Account } from "../../pages/Register/account";

export const Login = ({ click, close }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logininfo = { email, password };
  const handlelogin = async (logindata) => {
    try {
      const responses = await fetch(
        "https://lastlast.onrender.com/api/users/signIn/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(logindata),
        }
      );

      if (responses.ok) {
        const responseData = await responses.json();
        console.log("response", responseData);
        localStorage.setItem("token", responseData.token);

        alert("Sign IN successfully");
        console.log(responseData?.data?.role);
        setEmail("");
        setPassword("");

        if (responseData?.data?.role === "admin") {
          navigate("/dashboard");
        } else {
          navigate("/");
          close(false);
        }
      } else {
        console.log("failed to login");
        alert("failed to login");

        setEmail("");
        setPassword("");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="lgn-container">
      <div className="colo-login">
        <h3>Hello! Welcome Back</h3>
        <div className="login1">
          <input
            type="text"
            name="Name"
            placeholder="Email"
            required=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="login1">
          <input
            type="password"
            name="password"
            placeholder="Password"
            required=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <BsEyeFill />
        </div>
        <button
          className="btn-login"
          onClick={(e) => {
            e.preventDefault();
            handlelogin(logininfo);
          }}>
          SignIn
        </button>

        <div className="accaunt" onClick={click}>
          <h5>Don't have an account?Register</h5>
        </div>
      </div>
    </div>
  );
};
