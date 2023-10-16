import "./Login.css";

export const Login = () => {
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
          <button>Login</button>
        </div>
        <div className="accaunt">
          <h5>Create an account</h5>
        </div>
      </div>
    </div>
  );
};
