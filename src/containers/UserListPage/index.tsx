import Button from "components/Button";
import { H2 } from "components/H2";
import useAuth from "hooks/useAuth";
import React, { useEffect } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { ACTIONS } from "store/actions";
import styled from "styled-components";
import { Pagination } from "./Pagination";
import { UserList } from "./UserList";

const StyledContainer = styled.div`
  display: flex;
  align-content: center;
  flex-direction: column;
  max-width: 700px;
  margin: auto;
`;
const UserListPage = () => {
  const auth = useAuth();
  const dispatch = useDispatch();
  const { data, page, total_pages } = useSelector(
    (state: RootStateOrAny) => state.apiReducer.users
  );

  useEffect(() => {
    if (!Boolean(data)) {
      dispatch({ type: ACTIONS.API.USERS.GET_USERS, page: 1 });
    }
  }, [data, dispatch]);

  return (
    <StyledContainer>
      <H2>Lista de Usuarios</H2>
      <UserList users={data} />
      <Pagination totalPages={total_pages} page={page} />
      <Button onClick={auth.logout}>Cerrar Sesión</Button>
    </StyledContainer>
  );
};

export default UserListPage;
