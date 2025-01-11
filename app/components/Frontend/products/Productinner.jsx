"use client"
import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { Stack } from "@mui/material";
import Circles from "../Home/parts/Circles";
import ProductItem from "./parts/ProductItem";
import BasicBreadcrumbs from "./parts/BreadCrumbs";
import ProductCare from "./parts/ProductCare";
import Designslider from "../Home/parts/Designslider";
import banner1 from "./parts/assets/2.png";
import banner2 from "./parts/assets/3.png";
import banner3 from "./parts/assets/4.png";
import banner4 from "./parts/assets/5.png";
import YouMayAlsoLike from "./parts/YouMayAlsoLike";
import { useParams } from "next/navigation";

const Productinner = () => {
   const { name } = useParams();
    const decodedTitle = decodeURIComponent(name);
const bannerImages = [
  {
    id: 1,
    src: banner3,
    title: "Lorem ipsum lorem",
    price: "2,100/-",
  },
  {
    id: 1,
    src: banner2,
    title: "Lorem ipsum lorem",
    price: "2,100/-",
  },
  {
    id: 1,
    src: banner1,
    title: "Lorem ipsum lorem",
    price: "2,100/-",
  },
  {
    id: 1,
    src: banner4,
    title: "Lorem ipsum lorem",
    price: "2,100/-",
  },
];
  return (
    <Stack>
      <Navbar color={"black"} />
      <BasicBreadcrumbs />
      <ProductItem name={decodedTitle} />
      <Stack alignItems={"center"}>
        <ProductCare />
      </Stack>
      <YouMayAlsoLike
        bannerImages={bannerImages}
        width={"100%"}
        slidesToShow={4}
        position={"relative"}
        bottom={"45%"}
        padding={"100px"}
        paddinginner={"0 5px"}
      />
      <Circles />
    </Stack>
  );
};

export default Productinner;
