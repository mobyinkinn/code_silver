import { Stack } from "@mui/material";
import Navbar from "../navbar/Navbar";
import Circles from "../Home/parts/Circles";
import Banner from "./parts/Banner";

export default function About() {
  return (
    <Stack>
      <Navbar />
      <Banner />
      <Circles />
    </Stack>
  );
}
