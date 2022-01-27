import Button from "components/Button";
import { H2 } from "components/H2";
import useAuth from "hooks/useAuth";
import React from "react";

const UserListPage = () => {
  const auth = useAuth();
  return (
    <div>
      <H2>Lista de Usuarios</H2>
      <Button onClick={auth.logout}>Cerrar Sesión</Button>
    </div>
  );
};

export default UserListPage;
