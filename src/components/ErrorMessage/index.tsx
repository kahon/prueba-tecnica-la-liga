import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { H2 } from "components/H2";
import Modal from "components/Modal";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;
/**
 * @param { error: string : mensaje de error que se desea mostrar}
 * @returns Un componente Modal que muestra el mensaje de error durante
 * varios segundos.
 */
const ErrorMessage = ({ error }) => {
  const SHOWED_TIME = 2000; // 2 segundos
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (Boolean(error)) {
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, SHOWED_TIME);
    } else {
      setShow(false);
    }
  }, [error]);

  if (show) {
    return (
      <Modal>
        <StyledWrapper>
          <H2>Error</H2>
          <span>{error}</span>
        </StyledWrapper>
      </Modal>
    );
  } else {
    return <></>;
  }
};

export default ErrorMessage;
