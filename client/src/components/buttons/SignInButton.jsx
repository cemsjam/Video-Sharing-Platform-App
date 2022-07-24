import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

export const Button = styled(Link)`
  display: flex;
  align-items: center;
  width: fit-content;
  gap: 0.5rem;
  background-color: transparent;
  border: 1px solid var(--sign-in-button-accent-color);
  color: var(--sign-in-button-accent-color);
  padding: 5px 11px;
  text-transform: uppercase;
  font-weight: 500;
`;

const SignInButton = () => {
  return (
    <Button to="signin">
      <AccountCircleOutlinedIcon />
      Sign In
    </Button>
  );
};

export default SignInButton;
