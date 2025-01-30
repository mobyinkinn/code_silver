"use client";
import Header from "../components/ui/Header";
import Sidebar from "../components/ui/Sidebar";
import styled from "styled-components";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 19rem 1fr;
  grid-template-rows: auto 1fr;
  height: 90vh;
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 2rem 1.4rem 3.2rem;
  overflow-y: scroll;
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export default function Layout({ children }) {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Main>
        <Container>{children}</Container>
      </Main>
    </StyledAppLayout>
  );
}
