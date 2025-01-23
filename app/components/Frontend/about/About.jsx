import { Stack } from "@mui/material";
import Navbar from "../navbar/Navbar";
import Circles from "../Home/parts/Circles";
import Banner from "./parts/Banner";
import Rooted from "./parts/Rooted";
import Shikha from "./parts/Shikha";

export default function About() {
  return (
    <Stack>
      <Navbar />
      <Banner />
      <Rooted />
      <Shikha />
      <Circles />
    </Stack>
  );
}
