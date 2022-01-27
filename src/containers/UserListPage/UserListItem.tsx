import React from "react";
import { UserItem } from "services/API/usersAPI";
import styled from "styled-components";

const StyledWrapper = styled.div`
  width: 300px;
  margin: 1em;
  padding: 1em;
  border-style: dashed;
`;

export function UserListItem(attribute: { user: UserItem }) {
  const { user } = attribute;
  return (
    <StyledWrapper>
      <p>{user.first_name}</p>
    </StyledWrapper>
  );
}
