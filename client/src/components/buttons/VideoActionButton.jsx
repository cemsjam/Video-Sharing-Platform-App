import React from 'react';
import styled from 'styled-components';
const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  user-select: none;
  border: none;
  text-transform: capitalize;
  gap: 0.375rem;
`;

function VideoActionButton({ icon, text, onClick }) {
  return (
    <Button title={text} onClick={onClick}>
      {icon}
      {text}
    </Button>
  );
}

export default VideoActionButton;
