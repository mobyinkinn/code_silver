import styled from "styled-components";
import Header from "../../ui/Header";
import NavbarAdminVerticle from "./NavbarAdminVerticle";
import { useEffect, useState } from "react";
import { getCurrentUser } from "../../services/apiAuth";
import { useRouter } from "next/navigation";
import Spinner from "../../ui/Spinner";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { useCurrentAdmin } from "../userManagement/parts/useUser";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 19rem 1fr;
  grid-template-rows: auto 1fr;
  height: 90vh;
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 2rem 1.4rem 3.2rem;
  overflow: scroll;
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

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

function AppLayout({ children }) {
  const [user, setUser] = useState(null);
  const { currAdmin, isFetching } = useCurrentAdmin();
  const router = useRouter();

  useEffect(() => {
    async function auth() {
      const userData = await getCurrentUser();

      if (!userData) {
        router.push("/admin/login");
      }

      if (userData?.statusCode !== 200) {
        router.push("/admin/login");
      }

      setUser(userData?.data);
      // router.push(filteredNavData[0]?.link);
    }

    auth();
  }, []);

  if (isFetching) return <Spinner />;

  if (!user) {
    return <Spinner />;
  }
  // const filteredNavData = navData.filter((el) =>
  //   currAdmin?.menu?.includes(el.value)
  // );

  // if (filteredNavData.length > 0) {
  //   router.push(filteredNavData[0].link);
  // } else {
  //   router.push("/admin/login");
  // }
  return (
    <StyledAppLayout>
      <Header />
      <NavbarAdminVerticle />
      <Main>
        <Container>{children}</Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
