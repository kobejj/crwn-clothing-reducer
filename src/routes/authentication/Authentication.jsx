import React from "react";

import SignUpForm from "../../components/signup/SignUpForm";
import SignInForm from "../../components/signin/SignInForm";

import { AuthernticationContainer } from "./Authentication.styles.jsx";

const Authentication = () => {
  return (
    <AuthernticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthernticationContainer>
  );
};

export default Authentication;
