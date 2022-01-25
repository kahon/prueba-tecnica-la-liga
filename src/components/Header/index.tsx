import { H1 } from "components/H1";
import React from "react";
import styled from "styled-components";

const Header = () => {
  const StyledHeader = styled.header`
    width: 100vw;
    display: flex;
    align-items: center;
    border-bottom: solid 2px;
  `;

  return (
    <StyledHeader>
      <H1>Prueba técnica de LaLiga</H1>
    </StyledHeader>
  );
};
export { Header };
