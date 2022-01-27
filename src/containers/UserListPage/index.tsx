import Button from "components/Button";
import { H2 } from "components/H2";
import useAuth from "hooks/useAuth";
import React, { useEffect } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { ACTIONS } from "store/actions";
import styled from "styled-components";
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
  }, [dispatch]);

  const Container = styled.div`
    display: flex;
    align-content: center;
    flex-direction: column;
  `;

  return (
    <Container>
      <H2>Lista de Usuarios</H2>
      <UserList users={data} />
      <Pagination totalPages={total_pages} page={page} />
      <Button onClick={auth.logout}>Cerrar Sesión</Button>
    </Container>
  );
};

export default UserListPage;
