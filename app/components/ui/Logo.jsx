import Image from "next/image";
import styled from "styled-components";
// import { useDarkMode } from "../context/DarkModeContext";

const StyledLogo = styled.div`
  text-align: center;
  width: 100%;
  height: 15vh;
  position: relative;
`;

function Logo({ src }) {
  return (
    <StyledLogo>
      <Image
        src={src}
        // fill
        // objectFit="contain"
        style={{
          width: "100%",
          height: "80px",
        }}
        alt="Logo"
      />
    </StyledLogo>
  );
}

export default Logo;
