import React, { memo } from 'react';

import SidebarMenuItem from './SidebarMenuItem';
import {
  ButtonLabel,
  SidebarBtn,
  SidebarLinkBtn,
  IconContainer
} from './SidebarMenuItem';
import SignInButton from '../buttons/SignInButton';
import styled, { css } from 'styled-components';

// icons
import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SettingsBrightnessOutlinedIcon from '@mui/icons-material/SettingsBrightnessOutlined';
import { useState } from 'react';
import { breakpoint } from '../../utils/breakpoints';
import ToggleMenu from '../ToggleMenu';
import { useSelector } from 'react-redux';
//#region STYLES

const SidebarList = styled.ul`
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--divider-color);
  &:first-of-type {
    padding-top: 0;
  }
  &:last-child {
    border: none;
  }
`;
const SidebarListItem = styled.li``;

const SignInContainer = styled.div`
  padding: 1rem 2rem;
  border-bottom: 1px solid var(--divider-color);
`;
const SignInText = styled.span`
  display: block;
  margin-bottom: 0.25rem;
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
  z-index: var(--sidebar-zindex);
  ${props =>
    props.type === 'slideIn' &&
    css`
      position: fixed;
      transform: translateX(-100%);
      background-color: var(--background-color);
      transition: var(--transition-duration);
      visibility: hidden;
      height: 100vh;
      top: 0;
    `}
   
    &.active{
      visibility:visible;
      transform:translateX(0);
    }

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
      background-color: var(--disabled-color);
    }
  }
  &[data-mini] {
    @media ${breakpoint.downXs} {
      display: none;
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
    ${SidebarBtn},${SidebarLinkBtn} {
      flex-direction: column;
      gap: 5px;
      padding: 16px 0 14px;
    }
    ${IconContainer} {
      --size: unset;
    }
    ${ButtonLabel} {
      font-size: 10px;
      margin: 0;
    }

    ${SignInContainer},${SidebarListTitle} {
      display: none;
    }
  }
`;

//#endregion

export function Sidebar({
  isSidebarMinified,
  type,
  isSideBarOpen,
  setIsSideBarOpen
}) {
  console.log('sidebar rendered');
  const { currentUser } = useSelector(state => state.user);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleClick = () => {
    setIsSideBarOpen(false);
  };
  return (
    <Container
      type={type}
      className={isSideBarOpen ? 'active' : null}
      data-mini={isSidebarMinified}
    >
      {type === 'slideIn' ? (
        <>
          <ToggleMenu handleClick={handleClick} type="header" />
        </>
      ) : null}
      <SidebarList>
        <SidebarListItem>
          <SidebarMenuItem path="/" icon={<HomeIcon />} text="Home" />
        </SidebarListItem>
        <SidebarListItem>
          <SidebarMenuItem
            path="/trends"
            icon={<ExploreOutlinedIcon />}
            text="Explore"
          />
        </SidebarListItem>
        <SidebarListItem>
          <SidebarMenuItem
            path="/subscriptions"
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
      {!currentUser && (
        <SignInContainer>
          <SignInText>
            Sign in to like videos, comment, and subscribe.
          </SignInText>
          <SignInButton />
        </SignInContainer>
      )}

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
          {' '}
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
            type="button"
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
            icon={<SettingsBrightnessOutlinedIcon />}
          />
        </SidebarListItem>
      </SidebarList>
    </Container>
  );
}

export const MemoizedSidebar = memo(Sidebar);
