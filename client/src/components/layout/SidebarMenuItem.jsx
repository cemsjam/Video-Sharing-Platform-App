import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const SidebarLinkBtn = styled(NavLink)`
  display: flex;
  align-items: center;
  width: 100%;
  user-select: none;
  border: none;
  outline: none;
  background-color: transparent;
  text-transform: capitalize;
  white-space: nowrap;
  &:is(:hover, :focus) {
    background-color: var(--hover-color);
  }
  &[aria-current='page'] {
    background-color: var(--hover-color);
  }
`;
export const SidebarBtn = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  user-select: none;
  border: none;
  outline: none;
  background-color: transparent;
  text-transform: capitalize;
  white-space: nowrap;
  &:is(:hover, :focus) {
    background-color: var(--hover-color);
  }
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
  line-height: 1.4;
  margin: 0 0.5rem;
  user-select: none;
  border: none;
  outline: none;
  background-color: transparent;
`;

const SidebarMenuItem = props => {
  const handleThemeMode = () => {
    props.setIsDarkMode(!props.isDarkMode);
    document.documentElement.classList.toggle('light', !props.isDarkMode);
  };
  let isButton = props.type === 'button';
  let isDropdownDownButton = props.type === 'dropdownButton';
  if (isButton) {
    return (
      <SidebarBtn onClick={handleThemeMode}>
        <IconContainer>{props.icon}</IconContainer>
        <ButtonLabel>
          {props.isDarkMode ? 'Dark Mode' : 'Light mode'}
        </ButtonLabel>
      </SidebarBtn>
    );
  } else if (isDropdownDownButton) {
    return (
      <SidebarBtn onClick={props.onClick}>
        <IconContainer>{props.icon}</IconContainer>
        <ButtonLabel>{props.text}</ButtonLabel>
      </SidebarBtn>
    );
  }

  return (
    <SidebarLinkBtn to={props.path}>
      <IconContainer>{props.icon}</IconContainer>
      <ButtonLabel>{props.text}</ButtonLabel>
    </SidebarLinkBtn>
  );
};

export default SidebarMenuItem;
