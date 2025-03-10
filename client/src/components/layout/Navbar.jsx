import React, { useState } from 'react';

import styled from 'styled-components';
import SignInButton from '../buttons/SignInButton';
import UploadVideoModal from '../UploadVideoModal';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ToggleMenu from '../ToggleMenu';
import User from '../channel-components/User';
import { useSelector } from 'react-redux';

//#region styles
const Container = styled.header`
  height: var(--navbar-height);
  width: 100%;
  position: sticky;
  z-index: var(--navbar-zindex);

  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  background-color: var(--background-color);
`;

const ButtonsContainer = styled.div`
  padding-right: 2rem;
  flex-shrink: 0;
`;
const SearchBar = styled.div`
  flex: 0 1 728px;
  height: 40px;
  display: flex;
  align-items: center;
`;
const SearchInput = styled.input`
  flex: 1;
  height: 100%;
  padding: 2px 6px;
  border: 1px solid var(--border-color);
  border-right: none;
  background-color: var(--main-content-bg-color);
`;
const SearchButton = styled.button`
  width: 64px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--border-color);
  border: 1px solid var(--border-color);
  border-left: none;
  border-radius: 0 2px 2px 0;
`;
//#endregion

export function Navbar({
  isSidebarMinified,
  setIsSidebarMinified,
  isDesktopScreen,
  isSideBarOpen,
  setIsSideBarOpen
}) {
  const { currentUser } = useSelector((state) => state.user);
  console.log('nav rendered');
  const [openVideoUpload, setOpenVideoUpload] = useState(false);
  const handleOpenVideoUpload = () => {
    setOpenVideoUpload(!openVideoUpload);
  };

  const handleClick = () => {
    if (isDesktopScreen) {
      setIsSidebarMinified(!isSidebarMinified);
      return;
    } else if (!isDesktopScreen) {
      setIsSideBarOpen(!isSideBarOpen);
      document.body.toggleAttribute('overlay');
      return;
    }
  };
  return (
    <Container>
      <ToggleMenu handleClick={handleClick} />
      <SearchBar>
        <SearchInput
          placeholder="Search"
          type="text"
          autoComplete="off"
          autoCorrect="off"
          spellCheck="false"
          autoCapitalize="none"
        />
        <SearchButton title="Search">
          <SearchOutlinedIcon />
        </SearchButton>
      </SearchBar>
      {currentUser ? (
        <User
          handleOpenVideoUpload={handleOpenVideoUpload}
          user={currentUser}
        />
      ) : (
        <ButtonsContainer>
          <SignInButton />
        </ButtonsContainer>
      )}
      {openVideoUpload && (
        <UploadVideoModal handleOpenVideoUpload={handleOpenVideoUpload} />
      )}
    </Container>
  );
}

export const MemoizedNavbar = React.memo(Navbar);
