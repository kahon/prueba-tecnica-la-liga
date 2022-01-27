import React from "react";
import styled from "styled-components";
import { PaginationItem } from "./PaginationItem";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem;
  align-items: center;
  align-content: center;
`;

const Pagination = ({ totalPages, page }) => {
  const pages = Array.from(Array(totalPages).keys());
  return (
    <StyledWrapper>
      {pages.map((e, index) => {
        return (
          <PaginationItem
            key={index}
            page={index + 1}
            actived={page === index + 1}
          />
        );
      })}
    </StyledWrapper>
  );
};
export { Pagination };
