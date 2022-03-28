import React from "react";

import SignUpForm from "../../components/signup/SignUpForm";
import SignInForm from "../../components/signin/SignInForm";

import "./Authentication.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
