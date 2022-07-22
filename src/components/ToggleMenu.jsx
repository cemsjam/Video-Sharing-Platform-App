import styled from 'styled-components';
import React from 'react';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';
const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  width: var(--sidebar-width);
  padding-block: ${props => (props.type === 'header' ? '.5rem' : null)};
`;
const HamburgerButton = styled.button`
  --size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  margin: 0 1rem;
  user-select: none;
  border: none;
  outline: none;
  background-color: transparent;
  &:is(:active) {
    background-color: var(--hover-color);
  }
`;
const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  letter-spacing: -1px;
  user-select: none;
  font-weight: bold;
  font-size: 1rem;
  svg {
    color: #ff0000;
  }
`;
function ToggleMenu(props) {
  return (
    <ItemContainer type={props.type}>
      <HamburgerButton onClick={props.handleClick}>
        <MenuOutlinedIcon />
      </HamburgerButton>
      <LogoContainer to="/">
        <YouTubeIcon />
        CemsTube
      </LogoContainer>
    </ItemContainer>
  );
}

export default ToggleMenu;
