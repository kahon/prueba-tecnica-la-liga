import Button from "components/Button";
import { H1 } from "components/H1";
import InputText from "components/InputText";
import React, { useRef } from "react";
import { UserLogin, usersAPI } from "services/API/usersAPI";
import styled from "styled-components";

/**
 * Estilo del form
 */
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 15rem;
`;

/**
 * @returns componente React, form para hacer el login de usuario
 */
const LoginForm = () => {
  /**
   *  Referencias para obtener el usuario y la contraseña
   *  de los input
   */
  const refs = {
    username: useRef<HTMLInputElement | null>(null),
    password: useRef<HTMLInputElement | null>(null),
  };

  /**
   * Obtiene el nombre de usuario del input
   */
  function getUsername(): string {
    if (refs.username.current) {
      return refs.username.current.value.toString();
    } else {
      return "";
    }
  }

  /**
   * Obtiene el password del input
   */
  function getPassword(): string {
    if (refs.password.current) {
      return refs.password.current.value.toString();
    } else {
      return "";
    }
  }

  /**
   * Obtiene el usuario y la contraseña de los inputs y genera un usuario
   * @returns devuelve el usuario para hacer el login
   */
  function getUserForm(): UserLogin {
    return {
      username: getUsername(),
      password: getPassword(),
    };
  }

  /**
   * hace el login
   */
  function login(): void {
    usersAPI
      .login(getUserForm())
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <StyledForm
      onSubmit={(e) => {
        e.preventDefault();
        login();
      }}
    >
      <H1>Iniciar sesión</H1>
      <InputText
        type="text"
        placeholder="username"
        defaultValue="eve.holt@reqres.in"
        ref={refs.username}
      />
      <InputText
        type="password"
        placeholder="password"
        defaultValue="cityslicka"
        ref={refs.password}
      />
      <Button type="submit">Iniciar Sesión</Button>
    </StyledForm>
  );
};

export default LoginForm;
