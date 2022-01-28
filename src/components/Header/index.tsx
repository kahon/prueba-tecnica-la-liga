import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { H1 } from "components/H1";
import anime from "animejs";

const StyledHeader = styled.header`
  width: 100%;
  padding-block: 0.5rem;
  display: flex;
  align-items: center;
  border-bottom: solid 4px;
  border-color: ${(props) => props.theme.borderColor};
  background-color: ${(props) => props.theme.secondary};
`;

const Header = () => {
  const animationRef: any | null = useRef(null);
  useEffect(() => {
    animationRef.current = anime({
      targets: ".title_app",
      scaleX: [
        { value: 1.1, duration: 500 },
        { value: 1, duration: 500 },
      ],
      loop: true,
      easing: "easeInOutQuad",
    });
  }, []);

  return (
    <StyledHeader>
      <H1 className="title_app">Prueba técnica de LaLiga</H1>
    </StyledHeader>
  );
};
export { Header };
