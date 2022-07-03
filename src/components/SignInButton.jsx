import React from "react";
import styled from "styled-components";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: transparent;
  border: 1px solid var(--call-to-action-color);
  color: var(--call-to-action-color);
  padding: 5px 11px;
  text-transform: uppercase;
  font-weight: 500;
`;

const SignInButton = () => {
  return (
    <Button>
      <AccountCircleOutlinedIcon />
      Sign In
    </Button>
  );
};

export default SignInButton;
