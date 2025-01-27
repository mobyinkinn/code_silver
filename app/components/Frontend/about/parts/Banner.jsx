import { Stack, Typography } from "@mui/material";
import banner from "./assets/banner.png";

export default function Banner() {
  return (
    <Stack
      width={"100%"}
      height={"110vh"}
      direction="row"
      justifyContent={"space-around"}
      alignItems="center"
      sx={{
        backgroundImage: `url(${banner.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        color: "white",
      }}
    >
      <Typography
        fontSize={"1.2rem"}
        sx={{
          borderBottom: "1px white solid",
          padding: "4px 20px",
          transform: "rotate(-90deg)",
        }}
      >
        ESTD. 2010
      </Typography>
      <Stack alignItems={"center"}>
        <Typography fontSize={"2rem"} fontWeight={"bold"}>
          A MORDERN DESIGN STUDIO FROM INDIA,
        </Typography>
        <Typography fontSize={"2rem"} fontWeight={"bold"}>
          BLENDING RICH HERITAGE WITH
        </Typography>
        <Typography fontSize={"2rem"} fontWeight={"bold"}>
          CONTEMPORARY SILVER ARTISTRY.
        </Typography>
      </Stack>
      <Typography
        fontSize={"1.2rem"}
        sx={{
          borderBottom: "1px white solid",
          padding: "4px 20px",
          transform: "rotate(90deg)",
        }}
      >
        ESTD. 2010
      </Typography>
    </Stack>
  );
}
