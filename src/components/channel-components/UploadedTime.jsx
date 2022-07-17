import React from "react";
import styled from "styled-components";
const Span = styled.span`
  font-size: 0.75rem;
  color: var(--secondary-color);
`;
function UploadedTime({ text }) {
  return <Span>{text}</Span>;
}

export default UploadedTime;
