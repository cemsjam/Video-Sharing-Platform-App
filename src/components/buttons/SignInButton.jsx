import React from "react";
import styled from "styled-components";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: transparent;
  border: 1px solid var(--sign-in-button-color);
  color: var(--sign-in-button-color);
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
