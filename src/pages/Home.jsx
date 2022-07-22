import React from 'react';
import styled from 'styled-components';
import VideoCard from '../components/VideoCard';
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  height: 100%;
`;
export function Home() {
  return (
    <Container>
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
    </Container>
  );
}
