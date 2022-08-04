import React, { memo, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { breakpoint } from '../utils/breakpoints';
import { useDispatch } from 'react-redux';
import { loginFailed, loginStart, loginSuccess } from '../redux/userSlice';
import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';
import GoogleIcon from '@mui/icons-material/Google';
//#region styles
const Container = styled.div`
  min-height: calc(100vh - var(--navbar-height));
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FormWrapper = styled.div`
  max-width: 500px;
  width: 100%;
  padding: 4rem 2rem;
  margin: 0 1rem;
  @media ${breakpoint.upMd} {
    padding: 5rem;
  }
  background-color: var(--background-color);
  border-radius: 3px;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
`;
const Title = styled.h1`
  text-transform: capitalize;
  margin-bottom: 0.25rem;
`;
const Subtitle = styled.p`
  text-transform: capitalize;
  margin-bottom: 2rem;
  color: var(--secondary-color);
  font-size: 0.875rem;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const InputRow = styled.div`
  margin-bottom: 0.5rem;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

const Label = styled.label`
  display: block;
  color: var(--secondary-color);
  text-transform: capitalize;
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
`;
const INPUT_HEIGHT = '45px';
const INPUT_BORDER_RADIUS = '4px';
const Input = styled.input`
  display: block;
  width: 100%;
  background-color: transparent;
  border: 1px solid var(--divider-color);
  height: ${INPUT_HEIGHT};
  border-radius: ${INPUT_BORDER_RADIUS};
  padding: 0 0.5rem;
  transition: var(--transition-duration);
  &:is(:hover, :focus) {
    border-color: var(--text-color);
    outline: none;
  }
`;
const SubmitButton = styled.button`
  display: block;
  width: 100%;
  background-color: var(--sign-in-button-accent-color);
  color: var(--sign-in-button-text-color);
  margin-top: 2rem;
  height: ${INPUT_HEIGHT};
  border-radius: ${INPUT_BORDER_RADIUS};
`;
const NoAccountButton = styled(Link)`
  background-color: transparent;
  color: var(--secondary-color);
  font-size: 0.875rem;
  margin-top: 1rem;
  transition: var(--transition-duration);
  &:is(:hover, &:focus) {
    color: var(--text-color);
  }
`;
const GoogleButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 1rem;
  background-color: var(--sign-in-button-accent-color);
  color: var(--sign-in-button-text-color);
  margin-top: 1rem;
  height: ${INPUT_HEIGHT};
  border-radius: ${INPUT_BORDER_RADIUS};
`;

//#endregion
export function SignIn() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const handleSignIn = async e => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post('/auth/signin', { name, password });
      dispatch(loginSuccess(res.data));
    } catch (error) {
      dispatch(loginFailed());
    }
  };
  return (
    <Container>
      <FormWrapper>
        <Title>Welcome Back</Title>
        <Subtitle>Welcome back! Please enter your details</Subtitle>
        <Form onSubmit={handleSignIn}>
          <InputRow>
            <Label htmlFor="username">username</Label>
            <Input
              type="text"
              name="username"
              autoComplete="off"
              autoCorrect="off"
              id="username"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </InputRow>
          <InputRow>
            <Label htmlFor="password">password</Label>
            <Input
              type="password"
              name="password"
              autoComplete="off"
              autoCorrect="off"
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </InputRow>

          <SubmitButton>Sign In</SubmitButton>
          <GoogleButton>
            <GoogleIcon />
            <span style={{ margin: 'auto' }}>Sign In With Google</span>
          </GoogleButton>
        </Form>
        <NoAccountButton to="/signup">Don't have an account?</NoAccountButton>
      </FormWrapper>
    </Container>
  );
}
export const MemoizedSignIn = memo(SignIn);

export function SignUp() {
  console.log('signup rendered');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSignUp = async e => {
    e.preventDefault();
  };
  return (
    <Container>
      <FormWrapper>
        <Title>Register</Title>
        <Subtitle>Create New Account</Subtitle>
        <Form onSubmit={handleSignUp}>
          <InputRow>
            <Label htmlFor="username">username</Label>
            <Input
              type="text"
              name="username"
              autoComplete="off"
              autoCorrect="off"
              id="username"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </InputRow>
          <InputRow>
            <Label htmlFor="email">email</Label>
            <Input
              type="email"
              name="email"
              autoComplete="off"
              autoCorrect="off"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </InputRow>
          <InputRow>
            <Label htmlFor="password">password</Label>
            <Input
              type="password"
              name="password"
              autoComplete="off"
              autoCorrect="off"
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </InputRow>

          <SubmitButton>Register</SubmitButton>
        </Form>
        <NoAccountButton to="/signin">Already have an account?</NoAccountButton>
      </FormWrapper>
    </Container>
  );
}
export const MemoizedSignUp = memo(SignUp);
