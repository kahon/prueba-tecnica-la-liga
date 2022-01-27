import React, { useEffect } from "react";
import { UserItem } from "services/API/usersAPI";
import styled from "styled-components";
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
