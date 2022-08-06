import React from 'react';
import ChannelPicture from './channel-components/ChannelPicture';
import styled from 'styled-components';
import ChannelName from './channel-components/ChannelName';
import UploadedTime from './channel-components/UploadedTime';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import AddComment from '../components/AddComment';

const Container = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;
const CommentBody = styled.div`
  display: flex;
  flex-direction: column;
`;
const CommentHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
const ActualComment = styled.p`
  font-size: 0.875rem;
`;
const CommentCountContainer = styled.div`
  display: flex;
  gap: 0.25rem;
  text-transform: capitalize;
  margin-bottom: 1.5rem;
`;
function Comment() {
  return (
    <Container>
      <ChannelPicture
        size="2.5rem"
        type="link"
        path="/channel-name"
        img="https://yt3.ggpht.com/ytc/AKedOLSDVGzdBliH-ZI7ZxdKcW5QfLv-gmwXgtJd0aaS=s68-c-k-c0x00ffffff-no-rj"
        alt="channel image"
      />
      <CommentBody>
        <CommentHeader>
          <ChannelName
            label="Channel Name"
            type="primary"
            path="/channel-name"
          />
          <UploadedTime text="22 hours ago" />
        </CommentHeader>
        <ActualComment>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta enim
          recusandae odit sed officia alias. Illo magni laboriosam cupiditate
          facere.
        </ActualComment>
      </CommentBody>
    </Container>
  );
}
function Comments({ videoId }) {
  const { currentUser } = useSelector((state) => state.user);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axios.get(`/comments/${videoId}`);
        setComments(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchComments();
  }, [videoId]);
  console.log('videoId', comments);

  return (
    <>
      <CommentCountContainer>
        <span>{comments.length}</span>
        <span>Comments</span>
      </CommentCountContainer>
      <AddComment user={currentUser} />
      {comments.map((comment) => (
        <Comment key={comment._id} comment={comment} />
      ))}
    </>
  );
}

export default Comments;
