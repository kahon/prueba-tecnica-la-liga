import Modal from "components/Modal";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const StyledWrapper = styled.div``;
const ErrorMessage = ({ error }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    console.log(error);
    if (Boolean(error)) {
      setShow(false);
    } else {
      setShow(false);
    }
  }, [error]);

  if (show) {
    return (
      <Modal>
        <span>hola</span>
      </Modal>
    );
  } else {
    return <></>;
  }
};

export default ErrorMessage;
