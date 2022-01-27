import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  position: fixed;
  z-index: 999;
  height: 2em;
  width: 2em;
  overflow: show;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const StyleMessage = styled.div`
  width: 70px;
  height: 20px;
  background-color: white;
  text-align: center;
`;

const Loading = ({ show }) => {
  if (show) {
    return (
      <StyledWrapper>
        <StyleMessage>Cargando</StyleMessage>
      </StyledWrapper>
    );
  }
  return <></>;
};

export default Loading;
