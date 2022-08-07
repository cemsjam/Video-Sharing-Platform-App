import React, { useState } from 'react';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL
} from 'firebase/storage';
import app from '../firebase';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import UploadIcon from '@mui/icons-material/Upload';
import styled, { css } from 'styled-components';
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
//#region styles
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
  grid-template-rows: auto 1fr auto;
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
      margin-left: auto;
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
  gap: 1rem;
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
  input,
  textarea {
    background-color: var(--main-content-bg-color);
    height: 50px;
    padding-inline: 1rem;
  }
  textarea {
    padding-block: 1rem;
    overflow: hidden;
    resize: none;
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
  position: relative;
  span {
    font-size: 2.5rem;
    background-color: var(--background-color);
  }
  img {
    max-width: 100%;
    aspect-ratio: 1;
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
const Footer = styled.footer`
  height: 64px;
  padding-inline: 1.5rem;
  display: flex;
  align-items: center;
  border-top: 1px solid var(--border-color);
  position: relative;
  & > span {
    font-size: 0.875rem;
    color: var(--secondary-color);
  }
  & > span:first-child {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--comment-button-bg);
    transform: scaleX(0);
    transform-origin: left;
    transition: 250ms linear;
  }
`;
//#endregion
const UploadVideoModal = ({ handleOpenVideoUpload }) => {
  const [video, setVideo] = useState(undefined);
  const [img, setImg] = useState(undefined);
  const [inputs, setInputs] = useState({});
  const [tags, setTags] = useState(['']);
  const [imgPerc, setImgPerc] = useState(0);
  const [videoPerc, setVideoPerc] = useState(0);
  const navigate = useNavigate();

  const handleTags = (e) => {
    setTags(e.target.value.split(','));
  };
  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const uploadFile = (file, urlType) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        urlType === 'imgUrl' ? setImgPerc(progress) : setVideoPerc(progress);
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
          default:
            break;
        }
      },
      (error) => {},
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setInputs((prev) => {
            return { ...prev, [urlType]: downloadURL };
          });
        });
      }
    );
  };
  useEffect(() => {
    video && uploadFile(video, 'videoUrl');
  }, [video]);
  useEffect(() => {
    img && uploadFile(img, 'imgUrl');
  }, [img]);
  const handleUpload = async (e) => {
    e.preventDefault();
    console.log({ ...inputs, tags });
    const res = await axios.post('/videos', { ...inputs, tags });

    res.status === 200 && navigate(`/video/${res.data._id}`);
    handleOpenVideoUpload();
  };
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
        {Math.round(videoPerc) < 99 ? (
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
                name="title"
                id="title"
                placeholder="Enter a video title"
                onChange={handleChange}
              />
            </InputSection>
            <InputSection>
              <label htmlFor="description">Video Description</label>
              <input
                type="text"
                name="desc"
                id="description"
                placeholder="Enter a video description"
                onChange={handleChange}
              />
            </InputSection>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr min-content',
                gap: 15
              }}
            >
              <InputSection>
                <label htmlFor="tags">Video tags</label>
                <textarea
                  type="textarea"
                  name=""
                  id="tags"
                  rows={3}
                  cols={50}
                  placeholder="Enter video tags"
                  onChange={handleTags}
                />
              </InputSection>
              <Label htmlFor="img">
                <span>Thumbnail Picture</span>
                <HiddenInput
                  id="img"
                  type="file"
                  onChange={(e) => setImg(e.target.files[0])}
                />
                <ThumbnailImageContainer>
                  {Math.round(imgPerc) < 100 ? (
                    <UploadIconContainer>
                      <UploadIcon fontSize="inherit" />
                    </UploadIconContainer>
                  ) : (
                    <img src={inputs.imgUrl} alt={inputs.desc} />
                  )}
                </ThumbnailImageContainer>
              </Label>
            </div>
            <Button onClick={handleUpload} variant="upload">
              Upload
            </Button>
          </Content>
        )}
        <Footer>
          <span style={{ transform: `scaleX(${videoPerc}%)` }}></span>
          <span
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%'
            }}
          >
            {videoPerc > 0
              ? 'Uploading:' + Math.round(videoPerc) + '%'
              : 'Waiting for upload...'}
            {videoPerc === 100 && <span>Video has been uploaded!</span>}
          </span>
        </Footer>
      </ModalContent>
    </Modal>
  );
};

export default UploadVideoModal;
