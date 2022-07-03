import styled from "styled-components";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const Container = styled.header`
  height: var(--navbar-height);
  width: 100%;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  background-color: var(--dark-theme-background-color);
`;
const Button = styled.button`
  --size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: var(--size);
  height: var(--size);
  margin: 0 1rem;
  user-select: none;
  border: none;
  outline: none;
  background-color: transparent;
`;
const Logo = styled.img`
  max-width: 100%;
  display: block;
`;

export function Navbar({ isSidebarMinified, setIsSidebarMinified }) {
  return (
    <Container>
      <Button
        onClick={() =>
          setIsSidebarMinified((isSidebarMinified = !isSidebarMinified))
        }
      >
        <MenuOutlinedIcon />
      </Button>
      <Logo />
    </Container>
  );
}
