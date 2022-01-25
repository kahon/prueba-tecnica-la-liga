import Button from "components/Button";
import InputText from "components/InputText";
import React from "react";

const LoginForm = () => {
  return (
    <>
      <InputText placeholder="email" />
      <InputText placeholder="password" />
      <Button>Login</Button>
    </>
  );
};

export default LoginForm;
