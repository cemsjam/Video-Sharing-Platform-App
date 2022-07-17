import React from "react";
import styled from "styled-components";
const Button = styled.button`
  background-color: var(--subscribe-button-bg);
  color: var(--subscribe-button-color);
  user-select: none;
  border: none;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: normal;
  padding: 0.625rem 1rem;
  margin: 0 0.25rem;
  text-transform: uppercase;
`;
function SubscribeButton() {
  return <Button>Subscribe</Button>;
}

export default SubscribeButton;
