import React from 'react';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import styled from 'styled-components';
import ChannelPicture from './ChannelPicture';
const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-inline: 0.5rem 1.5rem;
`;
const CreateVideoWrapper = styled.div`
  position: relative;
`;
const ProfileWrapper = styled.div`
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
const User = ({ user }) => {
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
      </ProfileWrapper>
    </Container>
  );
};

export default User;
