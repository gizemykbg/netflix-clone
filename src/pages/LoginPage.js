import React, { useState } from "react";
import "./LoginPage.css";
import SignupPage from "./SignupPage";

function LoginPage() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="loginpage">
      <div className="loginpage-background">
        <img
          className="loginpage-logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="netflix logo"
        />

        <button onClick={() => setSignIn(true)} className="loginpage-button">
          Sign In
        </button>

        <div className="loginpage-gradient" />
      </div>
      <div className="loginpage-body">
        {signIn ? (
          <SignupPage />
        ) : (
          <>
            <h1>Unlimited films, TV programmes and more..</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              {" "}
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="loginpage-input">
              <form>
                <input type="email" placeholder="Email adress" />
                <button className="loginpage-getstarted">Get Started</button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginPage;
