import LoginForm from "components/LoginForm";
import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  height: 100vh;
  width: 100vw;
`;
const LoginPage = () => {
  return (
    <StyledWrapper>
      <LoginForm />
    </StyledWrapper>
  );
};

export default LoginPage;
