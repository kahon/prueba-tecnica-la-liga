import React, { useRef } from "react";
import styled from "styled-components";
import Button from "components/Button";
import { H1 } from "components/H1";
import InputText from "components/InputText";
import useAuth from "hooks/useAuth";
import { UserLogin } from "services/API/usersAPI";

const StyledWrapper = styled.div`
  height: 100%;
  width: 100%;
  padding-top: 3rem;
`;
/**
 * Estilo del form
 */
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 1rem;
  max-width: 15rem;
  border-radius: 3px;
  background-color: ${(props) => props.theme.secondary};
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
   * Hook que usaremos para hacer el login
   */
  const auth = useAuth();

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
    auth.login(getUserForm());
  }

  return (
    <StyledWrapper>
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
    </StyledWrapper>
  );
};

export default LoginForm;
