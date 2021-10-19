import React from "react";
import { useHistory } from "react-router-dom";
import './signup.scss';

function SignupPage(props) {
    let history = useHistory();

    function handleClick() {
      history.push("/");
    }

      function handlelClickSignup() {
        history.push("/home");
    }
  return (
    <div>
      <div className="signup-wrapper">
        <div className="Sign-in">
          <h3>Sign Up</h3>
          <div>Its free and takes only a minute</div>

          <div className="name-container flex-column">
            <label htmlFor="fname">FirstName:</label>
            <input type="text" id="fname" placeholder=" Enter first name" />
          </div>

          <div className="lname-container flex-column">
            <label htmlFor="lfname">LastName:</label>
            <input type="text" id="lfname" placeholder=" Enter last name" />
          </div>

          <div className="email-container flex-column">
            <label htmlFor="mail">E-Mail:</label>
            <input type="text" id="mail" placeholder=" Enter e-mail" />
          </div>

          <div className="password-container flex-column">
            <label htmlFor="pass">Password:</label>
            <input type="text" id="pass" placeholder=" Enter password" />
          </div>
          <div className="confirm-container flex-column">
            <label htmlFor="confirm">Confirm-Password:</label>
            <input
              type="text"
              id="confirm"
              placeholder=" Confirm your password"
            />
          </div>
          
            <button onClick={handlelClickSignup}>Submit</button>
          
          <div> Already Have an Account? Back To 
          </div>
          <button className="signbutton" onClick={handleClick}>Login</button>

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
