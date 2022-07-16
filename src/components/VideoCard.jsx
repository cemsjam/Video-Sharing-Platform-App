import React from "react";
import { breakpoint } from "../utils/breakpoints";

import styled from "styled-components";
import { Link } from "react-router-dom";
const Columns = styled.div`
  flex: 1 1 100%;
  max-width: 100%;

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
`;
const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  padding: 0 0.5rem 2.5rem;
`;
const Media = styled.div`
  aspect-ratio: 16/9;
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
const ChannelPic = styled(Link)`
  --size: 2rem;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
`;

const CardHeading = styled.h2`
  font-size: 0.875rem;
  color: var(--text-color);
`;
const ChannelOwner = styled(Link)`
  display: block;
  transition: var(--transition-duration);
  width: fit-content;
  cursor: pointer;
  &:is(:hover, :focus) {
    color: var(--text-color);
  }
`;
const Views = styled.span`
  color: var(--secondary-color);
  font-size: 0.75rem;
  margin-right: 0.25rem;
`;
const UploadedTime = styled.span`
  margin-left: 0.25rem;
`;

function VideoCard() {
  return (
    <Columns>
      <Card to="/video">
        <Media>
          <img
            src="https://i.ytimg.com/vi/MwUUoN_4I8s/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDMnXMRoSCyGLsnApmZMS06Y_6rHg"
            alt="best dota plays thumbnail"
          />
        </Media>
        <Body>
          <ChannelPic to="/channel-name">
            <img
              src="https://yt3.ggpht.com/ytc/AKedOLSDVGzdBliH-ZI7ZxdKcW5QfLv-gmwXgtJd0aaS=s68-c-k-c0x00ffffff-no-rj"
              alt=""
            />
          </ChannelPic>
          <InfoContainer>
            <CardHeading>TOP-15 Plays of DPC Summer Tour 3 Dota 2</CardHeading>
            <ChannelOwner title="hOlyhexOr" to="/owner">
              hOlyhexOr
            </ChannelOwner>
            <Views>3.8K views</Views>•<UploadedTime>21 hours ago</UploadedTime>
          </InfoContainer>
        </Body>
      </Card>
    </Columns>
  );
}

export default VideoCard;
