import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import Link from "next/link";
import styled from "styled-components";
import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
} from "react-icons/hi2";
import Image from "next/image";
import Logo from "../../ui/Logo";
import logo from "./assets/logo.png";
import { usePathname } from "next/navigation";
import { useAdmin, useCurrentAdmin } from "../userManagement/parts/useUser";
import Spinner from "../../ui/Spinner";

const navData = [
  {
    id: 0,
    value: "admin",
    name: "User Management",
    link: "/admin/adminuser",

    icon: ManageAccountsIcon,
  },
  {
    id: 100,
    name: "Banners",
    value: "banners",
    link: "/admin/banners",
    icon: ManageAccountsIcon,
  },
  {
    id: 1,
    name: "Departments",
    value: "departments",
    link: "/admin/department",
    icon: ManageAccountsIcon,
  },
  {
    id: 2,
    name: "Doctors",
    link: "/admin/doctors",
    value: "doctors",
    icon: ManageAccountsIcon,
  },
  {
    id: 4,
    value: "academics",
    name: "Academics",
    link: "/admin/academics",
    icon: ManageAccountsIcon,
  },
  {
    id: 5,
    value: "downloadables",
    name: "Download Files",
    link: "/admin/download_files",
    icon: ManageAccountsIcon,
  },
  {
    id: 6,
    name: "Academics Notices",
    value: "notices",
    link: "/admin/academic_notices",
    icon: ManageAccountsIcon,
  },
  {
    id: 7,
    name: "Tpa Logo",
    link: "/admin/tpa_index",
    icon: ManageAccountsIcon,
    value: "tpa",
  },
  {
    id: 8,
    name: "Events",
    link: "/admin/events",
    value: "events",
    icon: ManageAccountsIcon,
  },
  {
    id: 18,
    name: "Blogs",
    link: "/admin/blogs",
    value: "blogs",
    icon: ManageAccountsIcon,
  },
  {
    id: 9,
    name: "Testimonials",
    link: "/admin/testimonials",
    value: "testimonials",
    icon: ManageAccountsIcon,
  },
  {
    id: 10,
    name: "Award Accreditations",
    link: "/admin/awards",
    icon: ManageAccountsIcon,
    value: "awards",
  },
  {
    id: 11,
    name: "Enquiries",
    link: "/admin/enquiries",
    value: "enquiries",
    icon: ManageAccountsIcon,
  },
  {
    id: 13,
    name: "Videos",
    link: "/admin/videos",
    value: "videos",
    icon: ManageAccountsIcon,
  },
  {
    id: 14,
    name: "Latest Openings",
    value: "openings",
    link: "/admin/openings",
    icon: ManageAccountsIcon,
  },
  {
    id: 15,
    name: "Careers Data",
    value: "careers",
    link: "/admin/careers",
    icon: ManageAccountsIcon,
  },
  {
    id: 16,
    name: "Health Plans",
    link: "/admin/health-plans",
    value: "plans",
    icon: ManageAccountsIcon,
  },
  {
    id: 17,
    name: "Health Tips",
    value: "tips",
    link: "/admin/health-tips",
    icon: ManageAccountsIcon,
  },
];

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
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

const ActiveLink = styled(Link)`
  &:link {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    font-size: 1rem;
    text-decoration: none;
    font-weight: 500;
    padding: 0.8rem 1.5rem;
    transition: all 0.3s;
    background-color: var(--color-grey-50);
    color: var(--color-grey-800);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 1.5rem;
    height: 1.5rem;
    color: var(--color-brand-600);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 2rem 1rem;
  border-right: 1px solid var(--color-grey-100);
  grid-row: 1/ -1;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  height: 100vh;
  overflow: scroll;
`;

function NavbarAdminVerticle() {
  const { currAdmin, isFetching } = useCurrentAdmin();
  const pathname = usePathname();
  if (isFetching) return <Spinner />;

  const filteredNavData = navData.filter((el) =>
    currAdmin?.menu?.includes(el.value)
  );

  return (
    <StyledSidebar>
      <Logo src={logo} />
      <NavList>
        {filteredNavData.map((el, i) => {
          return (
            <div key={i}>
              {pathname === el.link ? (
                <ActiveLink href={el.link}>
                  <HiOutlineHome />
                  <span style={{ color: "var(--color-grey-800)" }}>
                    {el.name}
                  </span>
                </ActiveLink>
              ) : (
                <StyledNavLink href={el.link}>
                  <HiOutlineHome />
                  <span>{el.name}</span>
                </StyledNavLink>
              )}
            </div>
          );
        })}
      </NavList>
    </StyledSidebar>
  );
}

export default NavbarAdminVerticle;
