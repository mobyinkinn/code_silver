"use client"
import { Stack } from "@mui/material";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Banner from "./parts/Banner";
import Circles from "../Home/parts/Circles";
import ProductList from "./parts/ProductList";
import Gifts from "./parts/Gifts";
import ImageWithText from "./parts/ImagewithText";
import { useParams } from "next/navigation";

export default function () {
  const { title } = useParams();
  return (
    <Stack>
      <Navbar color={"black"} />
      <Banner />
      <ProductList title={title} />
      <ImageWithText />
      <Gifts />
      <Circles />
    </Stack>
  );
}

