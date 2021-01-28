import React from 'react';
import styled from 'styled-components';
import SignIn from '../../components/sign-in/SignIn';
import SignUp from '../../components/sign-up/SignUp';

const SignInSignUpContainer = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  margin: 30px auto;
`;

const SignInSignUp = () => (
  <SignInSignUpContainer>
    <SignIn />
    <SignUp />
  </SignInSignUpContainer>
);

export default SignInSignUp;
