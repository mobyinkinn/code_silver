"use client";

import styled from "styled-components";
import LoginForm from "../../features/authentication/LoginForm";
import Logo from "../../ui/Logo";
import Heading from "../../ui/Heading";

import logo from "./parts/assets/logo.png";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 1rem;
  background-color: var(--color-grey-50);
`;

function Login() {
  return (
    <LoginLayout>
      <Logo src={logo} />
      <Heading as="h4">Log in to your account</Heading>
      <LoginForm />
    </LoginLayout>
  );
}

export default Login;
