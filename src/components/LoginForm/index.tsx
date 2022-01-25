import Button from "components/Button";
import InputText from "components/InputText";
import React, { useRef } from "react";
import styled from "styled-components";

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
