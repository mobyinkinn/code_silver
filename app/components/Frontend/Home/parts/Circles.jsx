import { Stack } from "@mui/material";
import React from "react";
import circle from "../assets/Circle.png";
import Footer from "../../footer/Footer";
import SvgIcons from "./SvgIcons";

const Circles = () => {
  return (
    <Stack
      width={"100%"}
      height={"80vh"}
      sx={{
        backgroundImage: `url(${circle.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
      justifyContent={"end"}
      gap={5}
      pb={4}
    >
        <SvgIcons/>
        <Footer/>
    </Stack>
  );
};

export default Circles;
