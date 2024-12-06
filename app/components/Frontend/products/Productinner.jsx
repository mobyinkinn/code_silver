import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { Stack } from "@mui/material";
import Circles from "../Home/parts/Circles";
import ProductCare from "./parts/ProductCare";

const Productinner = () => {
  return (
    <Stack alignItems={"center"}>
      {/* <Navbar color={"black"} /> */}
      <ProductCare/>
      {/* <Circles /> */}
    </Stack>
  );
};

export default Productinner;
