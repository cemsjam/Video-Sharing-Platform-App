import React from "react";
import styled from "styled-components";
import { breakpoint } from "../utils/breakpoints";
import VideoCard from "../components/VideoCard";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import VideoActionButton from "../components/buttons/VideoActionButton";
import ChannelPicture from "../components/channel-components/ChannelPicture";
import ChannelName from "../components/channel-components/ChannelName";
import ChannelSubscribers from "../components/channel-components/ChannelSubscribers";
import SubscribeButton from "../components/buttons/SubscribeButton";
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
  padding-top: 56.25%;
  iframe {
    position: absolute;
    inset: 0;
  }
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
    content: "•";
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
const CommentCountContainer = styled.div`
  display: flex;
  gap: 0.25rem;
  text-transform: capitalize;
`;

export function Video() {
  return (
    <Container>
      <Content>
        <VideoContainer>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/MwUUoN_4I8s"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </VideoContainer>
        <InfoWrapper>
          <VideoName>Test Video</VideoName>
          <InfoContainer>
            <Left>
              <Views>4,024 views</Views>
              <Date>15 Jul 2022</Date>
            </Left>
            <Right>
              <VideoActionButton
                icon={<ThumbUpOutlinedIcon fontSize="medium" />}
                text="123"
              />
              <VideoActionButton
                icon={<ThumbDownOutlinedIcon fontSize="medium" />}
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
              path="/channel-name"
              img="https://yt3.ggpht.com/ytc/AKedOLSDVGzdBliH-ZI7ZxdKcW5QfLv-gmwXgtJd0aaS=s68-c-k-c0x00ffffff-no-rj"
              alt="channel image"
              size="lg"
              type="link"
            />
            <Middle>
              <ChannelName
                type="primary"
                label="hOlyhexOr"
                path="/hOlyhexOr-channel"
              />
              <ChannelSubscribers count="518k" />
            </Middle>
            <SubscribeButton />
          </DescriptionContainer>
          <VideoDescription>
            Video uploading app design using React and Styled Components.
            Youtube clone design with hooks and functional component. React
            video player.
          </VideoDescription>
        </DescriptionWrapper>
        <CommentCountContainer>
          <span>5</span>
          <span>Comments</span>
        </CommentCountContainer>
      </Content>
      <Recommandations>
        <VideoCard type="sm" />
        <VideoCard type="sm" />
        <VideoCard type="sm" />
        <VideoCard type="sm" />
        <VideoCard type="sm" />
      </Recommandations>
    </Container>
  );
}
