import React, { memo, useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import VideoCard from '../components/VideoCard';
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  height: 100%;
`;

function Home({ type }) {
  console.log('home rendered');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`/videos/${type}`);
      setVideos(res.data);
    };
    fetchVideos();
  }, [type]);

  return (
    <Container>
      {videos.map(video => (
        <VideoCard key={video._id} video={video} />
      ))}
    </Container>
  );
}

export default memo(Home);
