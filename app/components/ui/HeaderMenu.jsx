import styled from "styled-components";
import ButtonIcon from "./ButtonIcon";
import { HiOutlineUser } from "react-icons/hi2";
import { HiOutlineLogout } from "react-icons/hi";
// import { logout } from "../services/apiAuth";
// import { useRouter } from "next/navigation";

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.4rem;
`;
const Styledli = styled.li`
  list-style-type: none;
`;

function HeaderMenu() {
  // const router = useRouter();

  const onLogout = () => {
    // logout();
    // router.push("/admin/login");
  };

  return (
    <StyledHeaderMenu>
      <Styledli>
        <ButtonIcon>
          <HiOutlineUser />
        </ButtonIcon>
      </Styledli>
      <Styledli>
        <ButtonIcon onClick={onLogout}>
          <HiOutlineLogout />
        </ButtonIcon>
      </Styledli>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
