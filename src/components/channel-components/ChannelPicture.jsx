import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const CustomLink = styled(Link)`
  display: block;
  flex-shrink: 0;
  overflow: hidden;
  cursor: pointer;
`;
const Image = styled.img`
  --size: ${(props) => props.size};
  width: var(--size);
  height: var(--size);
  flex-shrink: 0;
  border-radius: 50%;
  background-color: var(--secondary-color);
`;
function ChannelPicture({ path, img, alt, size, type }) {
  if (type === "link") {
    return (
      <CustomLink to={path}>
        <Image size={size} src={img} alt={alt} />
      </CustomLink>
    );
  }
  return <Image size={size} src={img} alt={alt} />;
}

export default ChannelPicture;
