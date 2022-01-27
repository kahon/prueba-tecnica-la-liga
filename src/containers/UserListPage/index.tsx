import Button from "components/Button";
import { H2 } from "components/H2";
import useAuth from "hooks/useAuth";
import React from "react";
import { usersAPI } from "services/API/usersAPI";

const UserListPage = () => {
  const auth = useAuth();
  return (
    <div>
      <H2>Lista de Usuarios</H2>
      <Button
        onClick={() => {
          usersAPI.getUsers(0).then((data) => {
            console.log(data);
          });
        }}
      >
        get Users
      </Button>
      <Button onClick={auth.logout}>Cerrar Sesión</Button>
    </div>
  );
};

export default UserListPage;
