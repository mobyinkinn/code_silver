import Image from "next/image";
import styled from "styled-components";
// import { useDarkMode } from "../context/DarkModeContext";

const StyledLogo = styled.div`
  text-align: center;
`;

function Logo({ src }) {
  return (
    <StyledLogo>
      <Image src={src} alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
