import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { formatDistance } from 'date-fns';
import { breakpoint } from '../utils/breakpoints';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import ChannelPicture from './channel-components/ChannelPicture';
import ChannelName from './channel-components/ChannelName';
import UploadedTime from './channel-components/UploadedTime';
const Columns = styled.div`
  flex: 1 1 100%;
  max-width: 100%;
  ${(props) =>
    !props.type &&
    css`
      @media ${breakpoint.upSm} {
        flex: 1 1 50%;
        max-width: 50%;
      }
      @media ${breakpoint.upMd} {
        flex: 1 1 33.33%;
        max-width: 33.33%;
      }
      @media ${breakpoint.upLg} {
        flex: 1 1 25%;
        max-width: 25%;
      }
    `}
`;
const Card = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.type === 'sm' ? 'row' : 'column')};
  padding: ${(props) => !props.type && '0 0.5rem 2.5rem'};
  ${(props) =>
    props.type === 'sm' &&
    css`
      margin-top: 0.5rem;
      gap: 0.5rem;
      height: 100px;
      ${Body} {
        margin-top: 0;
      }
    `}
`;
const Media = styled(Link)`
  position: relative;
  padding-top: 56.25%;
  & > img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }
`;
const Body = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 0.75rem;
  user-select: none;
`;

const InfoContainer = styled.div`
  color: var(--secondary-color);
  font-size: 0.75rem;
  white-space: normal;
`;

const CardHeading = styled.h2`
  font-size: 0.875rem;
  color: var(--text-color);
  line-clamp: 2;
  text-overflow: ellipsis;
  overflow: hidden;
  display: block;
  -webkit-line-clamp: 2;
  display: box;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  white-space: normal;
`;

const Views = styled.span`
  color: var(--secondary-color);
  font-size: 0.75rem;
  &::after {
    content: '•';
    margin: 0 0.25rem;
  }
`;

function VideoCard({ type, video }) {
  const [channel, setChannel] = useState({});

  useEffect(() => {
    const fetchChannel = async () => {
      const res = await axios.get(`/users/find/${video.userId}`);
      setChannel(res.data);
    };
    fetchChannel();
  }, [video.userId]);

  return (
    <Columns type={type}>
      <Card type={type}>
        <Media to={`/video/${video._id}`}>
          <img src={video.imgUrl} alt="img" />
        </Media>
        <Body>
          {!type && (
            <ChannelPicture
              path={`/c/${channel._id}`}
              img={channel.img}
              alt="channel image"
              type="link"
              size="2rem"
            />
          )}

          <InfoContainer>
            <Link to={`/video/${video._id}`}>
              <CardHeading>{video.title}</CardHeading>
            </Link>
            <ChannelName
              size="sm"
              label={channel.name}
              path={`/c/${channel._id}`}
            />

            <Views>{video.views} views</Views>
            <UploadedTime
              text={formatDistance(new Date(video.createdAt), new Date(), {
                addSuffix: true
              })}
            />
          </InfoContainer>
        </Body>
      </Card>
    </Columns>
  );
}

export default VideoCard;
