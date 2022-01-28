import React, { useEffect, useRef } from "react";
import anime from "animejs";
import styled from "styled-components";

const StyledWrapper = styled.div`
  position: fixed;
  z-index: 20;
  background: transparent;
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
  border-radius: 3px;
`;

const Loading = ({ show }) => {
  const animationRef: any | null = useRef(null);
  useEffect(() => {
    animationRef.current = anime({
      targets: ".loading_text",
      rotate: [
        { value: 45, duration: 500 },
        { value: -45, duration: 500 },
      ],
      loop: true,
      direction: "alternate",
      easing: "linear",
    });
  }, [show]);

  if (show) {
    return (
      <StyledWrapper>
        <StyleMessage className="loading_text">Cargando</StyleMessage>
      </StyledWrapper>
    );
  }
  return <></>;
};

export default Loading;
