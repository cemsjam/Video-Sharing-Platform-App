import styled from "styled-components";
import { breakpoint } from "../utils/breakpoints";
import VideoCard from "../components/VideoCard";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import VideoActionButton from "../components/VideoActionButton";
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
    flex: 2 0 20%;
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
