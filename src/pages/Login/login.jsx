import React from "react";
import { useHistory } from "react-router-dom";

import './login.css';
function LoginPage(props) {
    let history = useHistory();

    function handleClick() {
      history.push("/signup");
    }
    

    function handleClickhome() {
      history.push("/Home");
    }
  
  return (
    <div>
      <div className="login-wrapper">
        <div className="login-form">
          <h2> Login Form</h2>

          <div className="username-container">
            <label for="mail">Username:</label>

            <input
              type="email"
              id="mail"
              name="mail"
              placeholder="Enter e-mail"
            />
          </div>

          <div className="pass-container">
            <label for="pass">Password:</label>

            <input
              type="password"
              id="pass"
              name="password"
              placeholder="Enter password"
            />
          </div>
          <div className="remember-link">
            <div>Remember me</div>

            <div className="resisterlink" onClick={handleClick}>Resister Here</div>
          </div>

          <div className="button-container">
            <button className="button" onClick={handleClickhome}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
