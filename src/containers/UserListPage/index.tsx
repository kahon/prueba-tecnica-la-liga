import Button from "components/Button";
import { H2 } from "components/H2";
import useAuth from "hooks/useAuth";
import React, { useEffect } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { ACTIONS } from "store/actions";
import { Pagination } from "./Pagination";
import { UserList } from "./UserList";

const UserListPage = () => {
  const auth = useAuth();
  const dispatch = useDispatch();
  const { data, page, total_pages } = useSelector(
    (state: RootStateOrAny) => state.apiReducer.users
  );

  useEffect(() => {
    dispatch({ type: ACTIONS.API.USERS.GET_USERS, page: 1 });
  }, []);

  return (
    <div>
      <H2>Lista de Usuarios</H2>
      <Button onClick={auth.logout}>Cerrar Sesión</Button>
      <UserList users={data} />
      <Pagination totalPages={total_pages} page={page} />
    </div>
  );
};

export default UserListPage;
