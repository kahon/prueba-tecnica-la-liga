import { H2 } from "components/H2";
import React from "react";
import styled from "styled-components";

const StyledModalContainer = styled.div`
  position: fixed;
  z-index: 20;
  background: #fff;
  width: 500px;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`;
const StyledModal = styled.div``;
const Modal = ({ children }) => {
  return (
    <StyledModalContainer>
      <StyledModal>{children}</StyledModal>
    </StyledModalContainer>
  );
};

export default Modal;
