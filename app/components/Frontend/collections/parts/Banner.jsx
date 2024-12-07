import { Stack } from "@mui/material";
import banner from "./assets/religiousRange.jpg";

export default function Banner() {
  return (
    <Stack
      sx={{
        height: "40vh",
        width: "100%",
        marginTop: "80px",
        backgroundImage: `url(${banner.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    ></Stack>
  );
}
