import React from 'react';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import styled from 'styled-components';
import ChannelPicture from './ChannelPicture';
import SidebarMenuItem from '../layout/SidebarMenuItem';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/userSlice';
const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-inline: 0.5rem 1.5rem;
`;
const CreateVideoWrapper = styled.div`
  position: relative;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: none;
  outline: none;
  user-select: none;
  background: none;
  cursor: pointer;
`;
const DropdownList = styled.ul`
  position: absolute;
  right: 0;
  top: 100%;
  list-style: none;
  width: 300px;
  z-index: var(--navbar-dropdown-zindex);
  background-color: var(--background-color);
  padding-block: 0.5rem;
  visibility: hidden;
  opacity: 1;
  transition: var(--transition-duration);
`;
const ProfileWrapper = styled.div`
  position: relative;
  &:focus-within {
    ${DropdownList} {
      opacity: 1;
      visibility: visible;
    }
  }
`;
const DropdownListItem = styled.li``;

const User = ({ user }) => {
  const dispatch = useDispatch();
  return (
    <Container>
      <CreateVideoWrapper>
        <Button type="button" title="Create">
          <VideoCallOutlinedIcon />
        </Button>
      </CreateVideoWrapper>
      <ProfileWrapper>
        <Button type="button">
          <ChannelPicture size="2rem" img={user.img} />
        </Button>
        <DropdownList>
          <DropdownListItem>
            <SidebarMenuItem
              onClick={() => dispatch(logout())}
              type="dropdownButton"
              text="Sign Out"
              icon={<ExitToAppOutlinedIcon />}
            />
          </DropdownListItem>
        </DropdownList>
      </ProfileWrapper>
    </Container>
  );
};

export default User;
