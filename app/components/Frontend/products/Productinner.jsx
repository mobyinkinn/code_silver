import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { Stack } from "@mui/material";
import Circles from "../Home/parts/Circles";
import ProductItem from "./parts/ProductItem";
import BasicBreadcrumbs from "./parts/BreadCrumbs";

const Productinner = () => {
  return (
    <Stack>
      <Navbar color={"black"} />
      <BasicBreadcrumbs />
      <ProductItem />
      <Circles />
    </Stack>
  );
};

export default Productinner;
