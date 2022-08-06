import React, { memo, useEffect, useState } from 'react';

import styled from 'styled-components';
import { breakpoint } from '../utils/breakpoints';
import VideoCard from '../components/VideoCard';
import { format, parseISO } from 'date-fns';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ThumbUpAltSharpIcon from '@mui/icons-material/ThumbUpAltSharp';
import ThumbDownAltSharpIcon from '@mui/icons-material/ThumbDownAltSharp';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import VideoActionButton from '../components/buttons/VideoActionButton';
import ChannelPicture from '../components/channel-components/ChannelPicture';
import ChannelName from '../components/channel-components/ChannelName';
import ChannelSubscribers from '../components/channel-components/ChannelSubscribers';
import WidgetButton from '../components/buttons/WidgetButton';
import Comments from '../components/Comments';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { fetchSuccess, like, dislike } from '../redux/videoSlice';
import { subscription } from '../redux/userSlice';
//#region STYLES
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  gap: 1rem;
  @media ${breakpoint.upLg} {
    flex-direction: row;
    padding: 0;
    gap: 0;
  }
`;
const Content = styled.div`
  @media ${breakpoint.upLg} {
    flex: 5;
    padding: 1.5rem;
  }
`;
const Recommandations = styled.div`
  @media ${breakpoint.upLg} {
    flex: 1.5 0 15%;
    padding: 1.5rem;
    padding-left: 0;
  }
`;
const VideoContainer = styled.div`
  width: 100%;
  position: relative;
  /* padding-top: 56.25%;
  iframe {
    position: absolute;
    inset: 0;
  } */
`;
const VideoFrame = styled.video`
  width: 100%;
  aspect-ratio: 16/9;
`;
const InfoWrapper = styled.div`
  padding: 1.5rem 0 0.5rem;
`;
const VideoName = styled.h1`
  font-size: 1.125rem;
`;
const InfoContainer = styled.div`
  font-size: 0.875rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Left = styled.div``;
const Right = styled.div`
  display: flex;
  gap: 0.5rem;
`;
const Views = styled.span`
  color: var(--secondary-color);
  &::after {
    content: '•';
    margin: 0 0.25rem;
  }
`;
const Date = styled.span`
  color: var(--secondary-color);
`;
const DescriptionWrapper = styled.div`
  border-top: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
  margin-bottom: 1.5rem;
  padding: 1rem 0;
`;
const DescriptionContainer = styled.div`
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
`;
const Middle = styled.div`
  flex: 1;
`;
const VideoDescription = styled.p`
  margin: 0 auto;
  font-size: 0.875rem;
  color: var(--text-color);
  margin-left: 3.5rem;
`;

//#endregion
function Video() {
  console.log('video rendered');
  const [channel, setChannel] = useState({});
  const dispatch = useDispatch();
  const { currentUser } = useSelector(state => state.user);
  const { currentVideo } = useSelector(state => state.video);

  const path = useLocation().pathname.split('/')[2];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const videoRes = await axios.get(`/videos/find/${path}`);
        const channelRes = await axios.get(
          `/users/find/${videoRes.data.userId}`
        );
        console.log('current video ->', videoRes.data);
        console.log('video channel ->', channelRes.data);
        console.log('current user', currentUser);
        setChannel(channelRes.data);
        dispatch(fetchSuccess(videoRes.data));
      } catch (error) {}
    };
    fetchData();
  }, [path, dispatch]);

  const handleLike = async () => {
    try {
      await axios.put(`/users/like/${currentVideo._id}`);
      dispatch(like(currentUser._id));
    } catch (error) {
      console.log(error);
    }
  };
  const handleDislike = async () => {
    try {
      await axios.put(`/users/dislike/${currentVideo._id}`);
      dispatch(dislike(currentUser._id));
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubscription = async () => {
    try {
      if (currentUser.subscribedUsers.includes(channel._id)) {
        await axios.put(`/users/unsub/${channel._id}`);
      } else {
        await axios.put(`/users/sub/${channel._id}`);
      }
      dispatch(subscription(channel._id));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <Content>
        <VideoContainer>
          {/* <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/MwUUoN_4I8s"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe> */}
          <VideoFrame src={currentVideo.videoUrl}></VideoFrame>
        </VideoContainer>
        <InfoWrapper>
          <VideoName>{currentVideo.title}</VideoName>
          <InfoContainer>
            <Left>
              <Views>{currentVideo.views} views</Views>
              <Date>
                {format(parseISO(currentVideo.createdAt), 'dd LLL yyyy')}
              </Date>
            </Left>
            <Right>
              <VideoActionButton
                onClick={handleLike}
                icon={
                  currentVideo.likes?.includes(currentUser?._id) ? (
                    <ThumbUpAltSharpIcon fontSize="medium" />
                  ) : (
                    <ThumbUpOutlinedIcon fontSize="medium" />
                  )
                }
                text={currentVideo.likes.length}
              />
              <VideoActionButton
                onClick={handleDislike}
                icon={
                  currentVideo.dislikes?.includes(currentUser?._id) ? (
                    <ThumbDownAltSharpIcon fontSize="medium" />
                  ) : (
                    <ThumbDownOutlinedIcon fontSize="medium" />
                  )
                }
                text="dislike"
              />
              <VideoActionButton
                icon={<ReplyOutlinedIcon fontSize="medium" />}
                text="share"
              />
              <VideoActionButton
                icon={<AddTaskOutlinedIcon fontSize="medium" />}
                text="save"
              />
            </Right>
          </InfoContainer>
        </InfoWrapper>
        <DescriptionWrapper>
          <DescriptionContainer>
            <ChannelPicture
              path={`/c/${channel._id}`}
              img={channel.img}
              alt={channel.img}
              size="3rem"
              type="link"
            />
            <Middle>
              <ChannelName
                type="primary"
                label={channel.name}
                path={`/c/${channel._id}`}
              />
              <ChannelSubscribers count={channel.subscribers} />
            </Middle>
            <WidgetButton
              text={
                currentUser?.subscribedUsers?.includes(channel._id)
                  ? 'subscribed'
                  : 'subscribe'
              }
              onClick={handleSubscription}
              foreground="var(--subscribe-button-color)"
              background={
                currentUser?.subscribedUsers?.includes(channel._id)
                  ? 'var(--comment-button-inactive-bg)'
                  : 'var(--subscribe-button-bg)'
              }
            />
          </DescriptionContainer>
          <VideoDescription>{currentVideo.desc}</VideoDescription>
        </DescriptionWrapper>

        <Comments videoId={currentVideo._id} />
      </Content>
      <Recommandations>
        {/* <VideoCard type="sm" />
        <VideoCard type="sm" />
        <VideoCard type="sm" />
        <VideoCard type="sm" />
        <VideoCard type="sm" /> */}
      </Recommandations>
    </Container>
  );
}

export default memo(Video);
