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

const navData = [];

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
