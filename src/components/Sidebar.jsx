import styled from "styled-components";
import SidebarMenuItem from "./SidebarMenuItem";
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import MovieCreationOutlinedIcon from "@mui/icons-material/MovieCreationOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import { ButtonLabel, SidebarBtn } from "./SidebarMenuItem";

//#region STYLES

const SidebarList = styled.ul`
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--dark-theme-divider-color);
  &:first-child {
    padding: 0;
    padding-bottom: 0.75rem;
  }
  &:last-child {
    border: none;
  }
`;
const SidebarListItem = styled.li``;

const SignInContainer = styled.div`
  padding: 1rem 2rem;
  border-bottom: 1px solid var(--dark-theme-divider-color);
`;
const SignInText = styled.span`
  display: block;
`;
const SignInButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: transparent;
  border: 1px solid var(--call-to-action-color);
  color: var(--call-to-action-color);
  padding: 5px 11px;
  text-transform: uppercase;
  margin-top: 0.25rem;
  font-weight: bold;
`;
const SidebarListTitle = styled.h3`
  padding: 0.75rem 1.5rem 0;
  font-size: inherit;
  text-transform: uppercase;
`;

const Container = styled.aside`
  height: calc(100vh - var(--navbar-height));
  position: sticky;
  top: var(--navbar-height);
  font-size: 0.875rem;
  width: var(--sidebar-width);
  overflow-x: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 16px;
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    height: 56px;
    border-radius: 8px;
    border: 4px solid transparent;
    background-clip: content-box;
    background-color: transparent;
  }
  &:hover {
    &::-webkit-scrollbar-thumb {
      background-color: var(--dark-theme-disabled-color);
    }
  }
  &[data-mini="true"] {
    width: var(--sidebar-mini-width);
    ${SidebarList} {
      border: none;
      padding: 0;
      &:nth-child(n + 3) {
        display: none;
      }
    }
    ${SidebarBtn} {
      padding: 16px 0 14px;
    }
    ${ButtonLabel} {
      font-size: 10px;
      margin: 0;
    }
    ${SidebarBtn} {
      flex-direction: column;
    }
    ${SignInContainer},${SidebarListTitle} {
      display: none;
    }
  }
`;

//#endregion

export function Sidebar({ isSidebarMinified }) {
  return (
    <Container data-mini={isSidebarMinified}>
      <SidebarList>
        <SidebarListItem>
          <SidebarMenuItem path="/" icon={<HomeIcon />} text="Home" />
        </SidebarListItem>
        <SidebarListItem>
          <SidebarMenuItem
            path="/explore"
            icon={<ExploreOutlinedIcon />}
            text="Explore"
          />
        </SidebarListItem>
        <SidebarListItem>
          <SidebarMenuItem
            path="/subscription"
            icon={<SubscriptionsOutlinedIcon />}
            text="Subscription"
          />
        </SidebarListItem>
      </SidebarList>

      <SidebarList>
        <SidebarListItem>
          <SidebarMenuItem
            path="/library"
            icon={<VideoLibraryOutlinedIcon />}
            text="Library"
          />
        </SidebarListItem>
        <SidebarListItem>
          <SidebarMenuItem
            path="/history"
            icon={<HistoryOutlinedIcon />}
            text="History"
          />
        </SidebarListItem>
      </SidebarList>

      <SignInContainer>
        <SignInText>Sign in to like videos, comment, and subscribe.</SignInText>
        <SignInButton>
          <AccountCircleOutlinedIcon />
          Sign In
        </SignInButton>
      </SignInContainer>

      <SidebarListTitle>Best Of Cems Tube</SidebarListTitle>
      <SidebarList>
        <SidebarListItem>
          <SidebarMenuItem
            path="/music"
            icon={<LibraryMusicOutlinedIcon />}
            text="music"
          />
        </SidebarListItem>
        <SidebarListItem>
          {" "}
          <SidebarMenuItem
            path="/sports"
            icon={<SportsBasketballIcon />}
            text="sports"
          />
        </SidebarListItem>
        <SidebarListItem>
          <SidebarMenuItem
            path="/gaming"
            icon={<SportsEsportsOutlinedIcon />}
            text="gaming"
          />
        </SidebarListItem>
        <SidebarListItem>
          <SidebarMenuItem
            path="/movies"
            icon={<MovieCreationOutlinedIcon />}
            text="movies"
          />
        </SidebarListItem>
        <SidebarListItem>
          <SidebarMenuItem
            path="/news"
            icon={<ArticleOutlinedIcon />}
            text="news"
          />
        </SidebarListItem>
        <SidebarListItem>
          <SidebarMenuItem
            path="/live"
            icon={<LiveTvOutlinedIcon />}
            text="live"
          />
        </SidebarListItem>
      </SidebarList>
      <SidebarList>
        <SidebarListItem>
          <SidebarMenuItem
            path="/settings"
            icon={<SettingsIcon />}
            text="settings"
          />
        </SidebarListItem>
        <SidebarListItem>
          <SidebarMenuItem
            path="/report"
            icon={<FlagOutlinedIcon />}
            text="report"
          />
        </SidebarListItem>
        <SidebarListItem>
          <SidebarMenuItem
            path="/help"
            icon={<HelpOutlineOutlinedIcon />}
            text="help"
          />
        </SidebarListItem>
        <SidebarListItem>
          <SidebarMenuItem
            path="settings"
            icon={<SettingsBrightnessOutlinedIcon />}
            text="light mode"
          />
        </SidebarListItem>
      </SidebarList>
    </Container>
  );
}
