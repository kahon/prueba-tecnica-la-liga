import React from "react";
import { useDispatch } from "react-redux";
import { ACTIONS } from "store/actions";
import styled from "styled-components";

const StyledWrapper = styled.div<{ actived: Boolean }>`
  background-color: ${(props: any) =>
    props.actived === true ? "orange" : "transparent"};
  margin-right: 1rem;
`;
export const PaginationItem = ({ page, actived }) => {
  const dispatch = useDispatch();
  return (
    <StyledWrapper actived={actived}>
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.API.USERS.GET_USERS, page });
        }}
      >
        {page}
      </button>
    </StyledWrapper>
  );
};
