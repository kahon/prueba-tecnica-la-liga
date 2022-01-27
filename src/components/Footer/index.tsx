import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100%;
  display: flex;
  align-content: center;
  text-align: center;
  margin: auto;
  height: 50px;
  background-color: ${(props) => props.theme.secondary};
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
