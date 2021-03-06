import React, { useEffect } from "react";
import styled from "styled-components";
import LoginForm from "components/LoginForm";

const StyledWrapper = styled.div`
  height: 100vh;
  width: 100vw;
`;
const LoginPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <StyledWrapper>
      <LoginForm />
    </StyledWrapper>
  );
};

export default LoginPage;
