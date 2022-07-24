import React from "react";
import styled from "styled-components";
const Block = styled.div`
  font-size: 0.75rem;
  color: var(--secondary-color);
`;
function ChannelSubscribers({ count }) {
  return <Block>{count} subscribers</Block>;
}

export default ChannelSubscribers;
