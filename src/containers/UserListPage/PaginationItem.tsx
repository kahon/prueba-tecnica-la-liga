import React from "react";
import { useDispatch } from "react-redux";
import { ACTIONS } from "store/actions";
import styled from "styled-components";

const StyledWrapper = styled.div<{ actived: Boolean }>`
  background-color: ${(props: any) =>
    props.actived === true ? "orange" : "transparent"};
  margin-right: 1rem;
  padding: 1rem;

  &:hover {
    background-color: yellow;
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
