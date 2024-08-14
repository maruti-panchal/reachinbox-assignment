// src/Signup.js
import React from "react";
import "./Signup.css";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Signup = () => {
  const handleClick = () => {
    window.location.href =
      "https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=http://localhost:3000/dashboard";
  };

  return (
    <>
      <Header />
      <div className="signup-container">
        <h2 className="signup-title">Create a new account</h2>
        <button className="google-signup" onClick={handleClick}>
          <img src="/images/Frame.png" alt="Google logo" />
          Sign Up with Google
        </button>

        <Link to="/create-account">
          <button className="create-account">Create an Account</button>
        </Link>
        <p className="signin-text">
          Already have an account?{" "}
          <Link to="/signin">
            <span>Sign In</span>
          </Link>
        </p>
      </div>
      {/* Uncomment if needed */}
      {/* <Footer /> */}
    </>
  );
};

export default Signup;
