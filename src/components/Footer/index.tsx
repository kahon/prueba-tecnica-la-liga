import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100%;
  height: 50px;
  display: flex;
  align-content: center;
  text-align: center;
  background-color: ${(props) => props.theme.secondary};
  margin: auto;
  border-top: 3px;
  border-color: ${(props) => props.theme.borderColor};
  margin-top: 1rem;
`;
const StyledInfo = styled.div`
  margin: auto;
`;
const Footer = () => {
  return (
    <StyledFooter>
      <StyledInfo>Página Realizada por Fernando Moreno Ruiz 2022</StyledInfo>
    </StyledFooter>
  );
};

export default Footer;
