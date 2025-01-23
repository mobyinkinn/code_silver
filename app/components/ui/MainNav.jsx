/* eslint-disable no-unused-vars */

// import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Link from "next/link";
import { HiOutlineLogout } from "react-icons/hi";
const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  list-style-type: none;
`;

const StyledNavLink = styled(Link)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    color: var(--color-grey-600);
    font-size: 1rem;
    text-decoration: none;
    font-weight: 500;
    padding: 0.8rem 1.5rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 1.5rem;
    height: 1.5rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

function MainNav() {
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink href="/admin/adminuser">
            <HiOutlineLogout />
            <span>Home</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink href="/admin/adminuser">
            <HiOutlineLogout />
            <span>Bookings</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink href="/admin/adminuser">
            <HiOutlineLogout />
            <span>Cabins</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink href="/admin/adminuser">
            <HiOutlineLogout />
            <span>Users</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink href="/admin/adminuser">
            <HiOutlineLogout />
            <span>Settings</span>
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}

export default MainNav;
