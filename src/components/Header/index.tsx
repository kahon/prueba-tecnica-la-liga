import { H1 } from "components/H1";
import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  width: 100%;
  padding-block: 0.5rem;
  display: flex;
  align-items: center;
  border-bottom: solid 1px;
  background-color: #bbd5ed;
`;

const Header = () => {
  return (
    <StyledHeader>
      <H1>Prueba técnica de LaLiga</H1>
    </StyledHeader>
  );
};
export { Header };
