import React from 'react';

function LoginPage(props) {
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
         <div>Resister Here</div>
        
</div>
        

        <div className="button-container">
          <button className="button">Login</button>
          
        </div>
        
      </div>
    </div>
        </div>
    );
}

export default LoginPage;