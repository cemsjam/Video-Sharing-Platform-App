import React from "react";
import styled from "styled-components";
const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  user-select: none;
  border: none;
  text-transform: capitalize;
  gap: 0.375rem;
`;

function VideoActionButton({ icon, text }) {
  return (
    <Button title={text}>
      {icon}
      {text}
    </Button>
  );
}

export default VideoActionButton;
