import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  position: fixed;
  z-index: 20;
  background: #fff;
  width: 70px;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
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
