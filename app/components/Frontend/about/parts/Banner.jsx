import { Stack } from "@mui/material";
import banner from "./assets/banner.png";

export default function Banner() {
  return (
    <Stack
      width={"100%"}
      height={"110vh"}
      sx={{
        backgroundImage: `url(${banner.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    ></Stack>
  );
}
