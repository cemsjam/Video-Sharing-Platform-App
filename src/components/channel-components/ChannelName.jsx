import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const ChannelOwner = styled(Link)`
  display: block;
  transition: var(--transition-duration);
  width: fit-content;
  font-size: ${(props) => (props.size === "sm" ? "0.75rem" : "0.875rem")};
  color: ${(props) =>
    props.type === "primary" ? "var(--text-color)" : "var(--secondary-color)"};
  cursor: pointer;

  &:is(:hover, :focus) {
    color: var(--text-color);
  }
`;
function ChannelName({ path, label, size, type }) {
  return (
    <ChannelOwner type={type} size={size} to={path} title={label}>
      {label}
    </ChannelOwner>
  );
}

export default ChannelName;
