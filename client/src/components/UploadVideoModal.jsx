import React, { useState } from 'react';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import UploadIcon from '@mui/icons-material/Upload';
import styled, { css } from 'styled-components';
const Modal = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  z-index: 1500;
`;
const ModalContent = styled.div`
  max-width: 960px;
  width: 100%;
  min-height: 492px;
  height: calc(100% - var(--navbar-height));
  margin-inline: 1rem;
  background-color: var(--background-color);
  margin-top: 20px;
  display: grid;
  grid-template-rows: auto 1fr;
  border-radius: 4px;
`;
const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  padding-inline: 1.5rem;
  border-bottom: 1px solid var(--border-color);
`;
const Content = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.variant === 'last-step' &&
    css`
      align-items: stretch;
    `}
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: var(--secondary-color);
  user-select: none;
  ${(props) =>
    props.variant === 'select' &&
    css`
      padding-inline: 1rem;
      height: 36px;
      min-width: 36px;
      border-radius: 2px;
      background-color: var(--sign-in-button-accent-color);
      color: var(--background-color);
      font-size: 0.8375rem;
      text-transform: uppercase;
      font-weight: 500;
      letter-spacing: -0.5px;
    `}
  ${(props) =>
    props.variant === 'upload' &&
    css`
      padding-inline: 1rem;
      height: 50px;
      min-width: 36px;
      width: 100%;
      border-radius: 2px;
      background-color: var(--sign-in-button-accent-color);
      color: var(--text-color);
      font-size: 1.25rem;
      text-transform: uppercase;
      font-weight: 500;

      margin-top: auto;
    `}
`;
const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  ${(props) =>
    props.htmlFor === 'img' &&
    css`
      align-items: flex-start;
      gap: 1rem;
      width: fit-content;
      span {
        font-size: 1rem;
        color: var(--secondary-color);
        font-weight: bold;
      }
    `}
`;
const UploadIconContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  --circle: 136px;
  width: var(--circle);
  height: var(--circle);
  font-size: 56px;
  color: var(--disabled-color);
  border-radius: 50%;
  background-color: var(--main-content-bg-color);
`;
const HiddenInput = styled.input`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;
const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  input,
  label {
    display: block;
  }
  label {
    font-size: 1rem;
    color: var(--secondary-color);
    text-transform: capitalize;
    font-weight: bold;
  }
  input {
    background-color: var(--main-content-bg-color);
    height: 50px;
    padding-inline: 1rem;
  }
  margin-bottom: 1rem;
`;
const ThumbnailImageContainer = styled.div`
  aspect-ratio: 1;
  width: 200px;
  background-color: var(--main-content-bg-color);
  margin-right: auto;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-size: 2.5rem;
    background-color: var(--background-color);
  }
`;
const InfoSpan = styled.span`
  font-size: 0.95rem;
  display: block;
  margin-top: 1.5rem;
  margin-bottom: 0.25rem;
`;
const InfoSpanLight = styled.span`
  font-size: 0.8375rem;
  display: block;
  margin-bottom: 1.5rem;
  color: var(--secondary-color);
`;

const UploadVideoModal = ({ handleOpenVideoUpload }) => {
  const [img, setImg] = useState(undefined);
  const [video, setVideo] = useState(undefined);

  return (
    <Modal>
      <ModalContent>
        <Header>
          <div style={{ fontWeight: 'bold', fontSize: '20px' }}>
            Upload Videos
          </div>
          <Button onClick={handleOpenVideoUpload}>
            <CloseOutlinedIcon fontSize="small" />
          </Button>
        </Header>
        {!video ? (
          <Content>
            <Label htmlFor="uploadVideo">
              <UploadIconContainer>
                <UploadIcon fontSize="inherit" />
              </UploadIconContainer>
              <InfoSpan>Drag And drop video files to upload</InfoSpan>
              <InfoSpanLight>
                Your videos will be private until you publish them
              </InfoSpanLight>
              <HiddenInput
                type="file"
                id="uploadVideo"
                onChange={(e) => setVideo(e.target.files[0])}
              />
              <Button variant="select" type="button">
                Select Files
              </Button>
            </Label>
          </Content>
        ) : (
          <Content variant="last-step">
            <InputSection>
              <label htmlFor="title">Video Title</label>
              <input
                type="text"
                name=""
                id="title"
                placeholder="Enter a video title"
              />
            </InputSection>
            <InputSection>
              <label htmlFor="description">Video Description</label>
              <input
                type="text"
                name=""
                id="description"
                placeholder="Enter a video description"
              />
            </InputSection>
            <Label htmlFor="img">
              <span>Thumbnail Picture</span>
              <HiddenInput
                id="img"
                type="file"
                onChange={(e) => setImg(e.target.files)}
              />
              <ThumbnailImageContainer>
                <UploadIconContainer>
                  <UploadIcon fontSize="inherit" />
                </UploadIconContainer>
              </ThumbnailImageContainer>
            </Label>
            <Button variant="upload">Upload</Button>
          </Content>
        )}
      </ModalContent>
    </Modal>
  );
};

export default UploadVideoModal;
