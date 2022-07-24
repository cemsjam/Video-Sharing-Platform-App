import React, { memo } from 'react';
import styled from 'styled-components';
import VideoCard from '../components/VideoCard';
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  height: 100%;
`;

function Home() {
  console.log('home rendered');
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

export default memo(Home);
