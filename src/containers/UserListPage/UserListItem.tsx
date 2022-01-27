import React from "react";
import { UserItem } from "services/API/usersAPI";
import styled from "styled-components";

const StyledWrapper = styled.div`
  width: 300px;
  height: 100px;
  margin: 1em;
  padding: 1em;
  border: solid 1px;
  border-radius: 3px;
  display: flex;
  flex-direction: row;
  /* border-color: #ef985f; */
  background-color: ${(props) => props.theme.secondary};

  &:hover {
    background-color: ${(props) => props.theme.actived};
  }
`;

const StyledImg = styled.img`
  border-radius: 50%;
  width: 90px;
  height: 90px;
  object-fit: cover;
  counter-increment: none;
`;

const StyledInfoContent = styled.div`
  padding: 0.5rem;
  margin-left: 0.5rem;
  display: flex;
  flex-direction: column;
`;
const StyledName = styled.p`
  font-weight: bold;
`;

export function UserListItem(attribute: { user: UserItem }): JSX.Element {
  const { user } = attribute;
  return (
    <StyledWrapper>
      <StyledImg src={user.avatar} />
      <StyledInfoContent>
        <StyledName>{user.first_name + " " + user.last_name}</StyledName>
        <p>{user.email}</p>
      </StyledInfoContent>
    </StyledWrapper>
  );
}
