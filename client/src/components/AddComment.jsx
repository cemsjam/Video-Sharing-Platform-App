import React, { useState } from "react";
import styled from "styled-components";
import ChannelPicture from "./channel-components/ChannelPicture";
import WidgetButton from "./buttons/WidgetButton";
const Container = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
`;
const FormContainer = styled.form`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
`;
const FormCommentBox = styled.div`
  flex: 1 1 100%;
  padding-bottom: 0.5rem;
  position: relative;
`;
const Input = styled.input`
  width: 100%;
  background-color: transparent;
  color: var(--text-color);
  font-size: 0.875rem;
  border-bottom: 1px solid var(--disabled-color);
  &:focus + label {
    opacity: 0;
  }
`;
const Label = styled.label`
  --label-fs: 0.875rem;
  color: var(--disabled-color);
  font-size: var(--label-fs);
  position: absolute;
  top: calc(1rem - var(--label-fs));
  user-select: none;
  pointer-events: none;
  left: 0;
`;

const FormCtaContainer = styled.div`
  margin-left: auto;
  display: ${(props) => (props.isInteracted ? "flex" : "none")};
  gap: 0.5rem;

  button {
    text-transform: uppercase;
  }
`;

function AddComment() {
  const [isInteracted, setIsInteracted] = useState(false);
  const [value, setValue] = useState("");
  return (
    <Container>
      <ChannelPicture
        img="https://yt3.ggpht.com/ytc/AKedOLSDVGzdBliH-ZI7ZxdKcW5QfLv-gmwXgtJd0aaS=s68-c-k-c0x00ffffff-no-rj"
        alt="channel image"
        size="2.5rem"
      />
      <FormContainer>
        <FormCommentBox>
          <Input
            type="text"
            id="comment"
            autoComplete="off"
            autoCorrect="off"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onClick={() => setIsInteracted(true)}
          />
          <Label htmlFor="comment">{!value && "Add a comment..."}</Label>
        </FormCommentBox>

        <FormCtaContainer isInteracted={isInteracted}>
          <WidgetButton text="cancel" />
          <WidgetButton
            text="comment"
            foreground={value ? "#fff" : "var(--secondary-color)"}
            background={
              value
                ? "var(--comment-button-bg)"
                : "var(--comment-button-inactive-bg)"
            }
          />
        </FormCtaContainer>
      </FormContainer>
    </Container>
  );
}

export default AddComment;
