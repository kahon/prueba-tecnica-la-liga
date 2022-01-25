import { H1 } from "components/H1";
import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  width: 100vw;
  display: flex;
  align-items: center;
  border-bottom: solid 2px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <H1>Prueba técnica de LaLiga</H1>
    </StyledHeader>
  );
};
export { Header };
