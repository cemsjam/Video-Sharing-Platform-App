import React from 'react';
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
  justify-content: center;
  align-items: center;
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
`;
const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
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
const Input = styled.input`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
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
        <Content>
          <Label htmlFor="uploadVideo">
            <UploadIconContainer>
              <UploadIcon fontSize="inherit" />
            </UploadIconContainer>
            <InfoSpan>Drag And drop video files to upload</InfoSpan>
            <InfoSpanLight>
              Your videos will be private until you publish them
            </InfoSpanLight>
            <Input type="file" id="uploadVideo" />
            <Button variant="select" type="button">
              Select Files
            </Button>
          </Label>
        </Content>
      </ModalContent>
    </Modal>
  );
};

export default UploadVideoModal;
