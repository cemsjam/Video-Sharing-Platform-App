import React from "react";
import styled from "styled-components";
const Button = styled.button`
  background-color: ${(props) =>
    props.background ? props.background : "transparent"};
  color: ${(props) =>
    props.foreground ? props.foreground : "var(--disabled-color)"};
  user-select: none;
  border: none;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: normal;
  padding: 0.625rem 1rem;
  margin: 0 0.25rem;
  text-transform: uppercase;
`;
function WidgetButton({ text, foreground, background }) {
  return (
    <Button foreground={foreground} background={background}>
      {text}
    </Button>
  );
}

export default WidgetButton;
