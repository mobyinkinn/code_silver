import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { Stack } from "@mui/material";
import Circles from "../Home/parts/Circles";
import ProductItem from "./parts/ProductItem";

const Productinner = () => {
  return (
    <Stack>
      <Navbar color={"black"} />
      <ProductItem />
      <Circles />
    </Stack>
  );
};

export default Productinner;
