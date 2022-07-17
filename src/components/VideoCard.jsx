import React from "react";
import { breakpoint } from "../utils/breakpoints";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

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
  flex-direction: ${(props) => (props.type === "sm" ? "row" : "column")};
  padding: ${(props) => !props.type && "0 0.5rem 2.5rem"};
  ${(props) =>
    props.type === "sm" &&
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
  aspect-ratio: 16/9;
`;
const Body = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 0.75rem;
  user-select: none;
`;
const ChannelPic = styled(Link)`
  --size: 2rem;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  background-color: var(--secondary-color);
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
  &::after {
    content: "•";
    margin: 0 0.25rem;
  }
`;
const UploadedTime = styled.span``;

function VideoCard({ type }) {
  return (
    <Columns type={type}>
      <Card type={type}>
        <Media to="/video">
          <img
            src="https://i.ytimg.com/vi/MwUUoN_4I8s/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDMnXMRoSCyGLsnApmZMS06Y_6rHg"
            alt="best dota plays thumbnail"
          />
        </Media>
        <Body>
          {!type === "sm" && (
            <ChannelPic to="/channel-name">
              <img
                src="https://yt3.ggpht.com/ytc/AKedOLSDVGzdBliH-ZI7ZxdKcW5QfLv-gmwXgtJd0aaS=s68-c-k-c0x00ffffff-no-rj"
                alt=""
              />
            </ChannelPic>
          )}
          <InfoContainer>
            <Link to="/video">
              <CardHeading>
                TOP-15 Plays of DPC Summer Tour 3 Dota 2
              </CardHeading>
            </Link>

            <ChannelOwner title="hOlyhexOr" to="/owner">
              hOlyhexOr
            </ChannelOwner>
            <Views>3.8K views</Views>
            <UploadedTime>21 hours ago</UploadedTime>
          </InfoContainer>
        </Body>
      </Card>
    </Columns>
  );
}

export default VideoCard;
