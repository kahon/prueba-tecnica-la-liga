import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { ACTIONS } from "store/actions";

const StyledWrapper = styled.div<{ actived: Boolean }>`
  background-color: ${(props: any) =>
    props.actived === true ? "#feb236" : props.theme.secondary};
  text-decoration: ${(props: any) =>
    props.actived === true ? "underline" : "none"};
  margin-right: 1rem;
  padding: 1rem;
  border-radius: 3px;
  width: 1rem;
  text-align: center;
  border-color: ${(props) => props.theme.borderColor};

  &:hover {
    background-color: ${(props) => props.theme.active};
    cursor: pointer;
  }
`;

export const PaginationItem = ({ page, actived }) => {
  const dispatch = useDispatch();
  return (
    <StyledWrapper
      actived={actived}
      onClick={() => {
        dispatch({ type: ACTIONS.API.USERS.GET_USERS, page });
      }}
    >
      {page}
    </StyledWrapper>
  );
};
