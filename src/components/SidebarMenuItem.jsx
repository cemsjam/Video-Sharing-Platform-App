import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const SidebarBtn = styled(Link)`
  display: flex;
  align-items: center;
  width: 100%;
  user-select: none;
  border: none;
  outline: none;
  background-color: transparent;
  text-transform: capitalize;
`;
export const IconContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  --size: 40px;
  width: var(--size);
  height: var(--size);
  margin: 0 1rem;
`;

export const ButtonLabel = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: var(--size);
  height: var(--size);
  margin: 0 0.5rem;
  user-select: none;
  border: none;
  outline: none;
  background-color: transparent;
`;

const SidebarMenuItem = (props) => {
  return (
    <SidebarBtn to={props.path}>
      <IconContainer>{props.icon}</IconContainer>
      <ButtonLabel>{props.text}</ButtonLabel>
    </SidebarBtn>
  );
};

export default SidebarMenuItem;
