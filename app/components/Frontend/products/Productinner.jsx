import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { Stack } from "@mui/material";
import Circles from "../Home/parts/Circles";

const Productinner = () => {
  return (
    <Stack>
      <Navbar color={"black"} />
      <Circles />
    </Stack>
  );
};

export default Productinner;
