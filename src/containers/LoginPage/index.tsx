import ContainerCenter from "components/ContainerCenter";
import { Header } from "components/Header";
import LoginForm from "components/LoginForm";
import React from "react";

const LoginPage = () => {
  return (
    <>
      <Header />
      <ContainerCenter>
        <LoginForm />
      </ContainerCenter>
    </>
  );
};

export default LoginPage;
