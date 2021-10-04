import React from "react";
import { useHistory } from "react-router-dom";
import './signup.css';

function SignupPage(props) {
    let history = useHistory();

    function handleClick() {
      history.push("/");
    }
  return (
    <div>
      <div className="login-wrapper">
        <div className="Sign-in">
          <h3>Sign Up</h3>
          <div>Its free and takes only a minute</div>

          <div className="name-container flex-column">
            <label for="fname">FirstName:</label>
            <input type="text" id="fname" placeholder=" Enter first name" />
          </div>

          <div className="lname-container flex-column">
            <label for="lfname">LastName:</label>
            <input type="text" id="lfname" placeholder=" Enter last name" />
          </div>

          <div className="email-container flex-column">
            <label for="mail">E-Mail:</label>
            <input type="text" id="mail" placeholder=" Enter e-mail" />
          </div>

          <div className="password-container flex-column">
            <label for="pass">Password:</label>
            <input type="text" id="pass" placeholder=" Enter password" />
          </div>
          <div className="confirm-container flex-column">
            <label for="confirm">Confirm-Password:</label>
            <input
              type="text"
              id="confirm"
              placeholder=" Confirm your password"
            />
          </div>
          <div className="button-container">
            <button>Submit</button>
          </div>
          <div> Already Have an Account? Back To 
          </div>
          <button className="Loginbutton" onClick={handleClick}>Login</button>

          <div className="notification">
            <p>
              By clicking the sign up button, you agree to our<br></br>{" "}
              <a href=" ">Terms and Condition</a> and{" "}
              <a href=" ">Policy Privacy</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
