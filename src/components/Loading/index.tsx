import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  z-index: 1000;
  margin: auto;
  position: static;
  top: 50%;
`;

const Loading = ({ show }) => {
  if (show) {
    return <div>Cargando</div>;
  }
  return <></>;
};

export default Loading;
