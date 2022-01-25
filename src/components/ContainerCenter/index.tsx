import React from "react";
import styled from "styled-components";
/**
 * Este componente centra los componentes hijos dentro de él
 * en el centro de la pantalla horizontalmente
 * y centra en un 60% de la vista vertical para que queden
 * los elementos más cercanos al top
 */
const ContainerCenter = ({ children }) => {
  const StyledDiv = styled.div`
    height: 60vh;
    width: 100vw;
    display: flex;
    align-items: center;
    align-content: center;
  `;
  return <StyledDiv>{children}</StyledDiv>;
};

export default ContainerCenter;
