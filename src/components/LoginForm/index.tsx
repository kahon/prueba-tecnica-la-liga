import Button from "components/Button";
import InputText from "components/InputText";
import React, { useRef } from "react";
import { UserLogin, usersAPI } from "services/API/usersAPI";

const LoginForm = () => {
  const refs = {
    username: useRef<HTMLInputElement | null>(null),
    password: useRef<HTMLInputElement | null>(null),
  };
  function getUsername(): string {
    if (refs.username.current) {
      return refs.username.current.value.toString();
    } else {
      return "";
    }
  }

  function getPassword(): string {
    if (refs.password.current) {
      return refs.password.current.value.toString();
    } else {
      return "";
    }
  }
  function getUserForm(): UserLogin {
    return {
      username: getUsername(),
      password: getPassword(),
    };
  }
  return (
    <>
      <InputText placeholder="username" ref={refs.username} />
      <InputText placeholder="password" ref={refs.password} />
      <Button
        onClick={() => {
          usersAPI.login(getUserForm()).then((response) => {
            console.log(response);
          });
        }}
      >
        Login
      </Button>
    </>
  );
};

export default LoginForm;
