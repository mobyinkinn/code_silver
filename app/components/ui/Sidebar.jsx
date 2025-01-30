import styled from "styled-components";
import logo from "./logo.png";

import Logo from "./Logo";
import MainNav from "./MainNav";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);
  grid-row: 1/ -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  overflow-y: scroll;
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <Logo src={logo} />
      <MainNav />
    </StyledSidebar>
  );
}

export default Sidebar;
