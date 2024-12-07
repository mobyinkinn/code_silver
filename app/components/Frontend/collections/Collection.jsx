import { Stack } from "@mui/material";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Banner from "./parts/Banner";
import Circles from "../Home/parts/Circles";
import ProductList from "./parts/ProductList";
import Gifts from "./parts/Gifts";

export default function () {
  return (
    <Stack>
      <Navbar color={"black"} />
      <Banner />
      <ProductList />
      <Gifts />
      <Circles />
    </Stack>
  );
}
