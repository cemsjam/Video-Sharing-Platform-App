import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
const Container = styled.aside`
  height: calc(100vh - var(--navbar-height));
  position: sticky;
  top: var(--navbar-height);
  font-size: 0.875rem;
  width: 240px;
`;
const SidebarBtn = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  user-select: none;
  border: none;
  outline: none;
  background-color: transparent;
`;
const IconContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  --size: 40px;
  width: var(--size);
  height: var(--size);
  margin: 0 1rem;
`;
const Hr = styled.hr`
  border-color: var(--dark-theme-divider-color);
  border-width: 1px;
  margin: 12px 0;
`;
const ButtonLabel = styled.span`
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
const SignInText = styled.span`
  display: block;
  padding: 0 1rem;
  max-width: 29ch;
`;
const SignInButton = styled.button`
  margin: 0 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: transparent;
  border: 1px solid var(--call-to-action-color);
  color: var(--call-to-action-color);
  padding: 5px 11px;
  text-transform: uppercase;
  margin-top: 4px;
  font-weight: bold;
`;
const SidebarTitle = styled.h3`
  padding: 0 24px 8px;
  font-size: inherit;
  text-transform: uppercase;
`;

export function Sidebar() {
  return (
    <Container>
      <SidebarBtn>
        <IconContainer>
          <HomeIcon />
        </IconContainer>
        <ButtonLabel>Home</ButtonLabel>
      </SidebarBtn>
      <SidebarBtn>
        <IconContainer>
          <ExploreOutlinedIcon />
        </IconContainer>
        <ButtonLabel>Explore</ButtonLabel>
      </SidebarBtn>
      <SidebarBtn>
        <IconContainer>
          <SubscriptionsOutlinedIcon />
        </IconContainer>
        <ButtonLabel>Subscription</ButtonLabel>
      </SidebarBtn>
      <Hr />
      <SidebarBtn>
        <IconContainer>
          <VideoLibraryOutlinedIcon />
        </IconContainer>
        <ButtonLabel>Library</ButtonLabel>
      </SidebarBtn>
      <SidebarBtn>
        <IconContainer>
          <HistoryOutlinedIcon />
        </IconContainer>
        <ButtonLabel>History</ButtonLabel>
      </SidebarBtn>
      <Hr />
      <SignInText>Sign in to like videos, comment, and subscribe.</SignInText>
      <SignInButton>
        <AccountCircleOutlinedIcon />
        Sign In
      </SignInButton>
      <Hr />
      <SidebarTitle>Best Of Cems Tube</SidebarTitle>
    </Container>
  );
}
