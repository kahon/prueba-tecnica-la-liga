import React from "react";
import styled from "styled-components";
import { UserItem } from "services/API/usersAPI";
import { UserListItem } from "./UserListItem";

const StyledWrapper = styled.div`
  margin: auto;
`;
const UserList = (attributes: { users: Array<UserItem> }) => {
  const { users } = attributes;

  return (
    <StyledWrapper>
      {users?.map((user: UserItem) => (
        <UserListItem key={user.id} user={user} />
      ))}
    </StyledWrapper>
  );
};

export { UserList };
