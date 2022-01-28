import Button from "components/Button";
import { H2 } from "components/H2";
import Modal from "components/Modal";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;
const ErrorMessage = ({ error }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (Boolean(error)) {
      setShow(true);
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
          <Button
            onClick={() => {
              setShow(false);
            }}
          >
            Cerrar
          </Button>
        </StyledWrapper>
      </Modal>
    );
  } else {
    return <></>;
  }
};

export default ErrorMessage;
