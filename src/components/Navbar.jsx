import styled from "styled-components";
import SignInButton from "./SignInButton";
//icons
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link } from "react-router-dom";

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
const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
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
  svg {
    color: #ff0000;
  }
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

export function Navbar({ isSidebarMinified, setIsSidebarMinified }) {
  return (
    <Container>
      <ItemContainer>
        <HamburgerButton
          onClick={() =>
            setIsSidebarMinified((isSidebarMinified = !isSidebarMinified))
          }
        >
          <MenuOutlinedIcon />
        </HamburgerButton>
        <LogoContainer to="/">
          <YouTubeIcon />
          CemsTube
        </LogoContainer>
      </ItemContainer>
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
      <ButtonsContainer>
        <SignInButton />
      </ButtonsContainer>
    </Container>
  );
}
