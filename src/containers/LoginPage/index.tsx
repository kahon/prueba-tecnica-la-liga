import Button from "components/Button";
import { Header } from "components/Header";
import React from "react";

const LoginPage = () => {
  return (
    <div>
      <Header />
      Login Page
      <Button onClick={() => alert("hola")}>Login</Button>
    </div>
  );
};

export default LoginPage;
