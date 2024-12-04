"use client";

import React, { useRef, useState } from "react";
import left from "../assets/18.png";
import { Box, Stack, Typography } from "@mui/material";
import Slider from "react-slick";
import banner from "../assets/15.jpg";
import banner2 from "../assets/16.jpg";
import banner3 from "../assets/17.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Image from "next/image";

const normalStyle = {
  height: "20px",
  cursor: "pointer",
  width: "20px",
  color: "white",
};

const hoverStyle = {
  height: "20px",
  cursor: "pointer",
  width: "20px",
  color: "white",
};

const bannerImages = [banner, banner2, banner3];

const Tradition = () => {
    const [arrowStyle1, setArrowStyle1] = useState(normalStyle);
    const [arrowStyle2, setArrowStyle2] = useState(normalStyle);
    const TraditionsliderRef = useRef(null);
     const settings = {
       dots: false,
       infinite: true,
       speed: 500,
       arrows: false,
       slidesToShow: 3,
       slidesToScroll: 1,
     };
  return (
    <Stack width={"100%"} direction={"row"} position={"relative"} pt={5}>
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        sx={{
          backgroundImage: `url(${left.src})`,
          backgroundSize: "40%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top left",
        }}
      />
      <Stack
        width={"40%"}
        bgcolor={"#ebebeb"}
        justifyContent={"center"}
        height={"100vh"}
      >
        <Typography fontSize={"35px"} pl={5}>
          Rooted in
        </Typography>
        <Typography fontSize={"53px"} pl={5} lineHeight={1.2}>
          Tradition
        </Typography>
        <Typography fontSize={"42px"} pl={5}>
          Inspired by Journeys
        </Typography>
        <Box
          mt={2}
          sx={{
            content: "''",
            height: "1px",
            width: "300px",
            bgcolor: "black",
          }}
        />
        <Typography p={"16px 40px"} fontSize={"15px"} textAlign={"justify"}>
          At Code Silver, our story is as timeless as the craft we cherish. Born
          in Jaipur, India and shaped by its vibrant heritage, our creations are
          a testament to the artistry and culture that define us. Each piece
          carries the essence of tradition, inspired by countless journeys
          across the globe that enrich our vision. &nbsp; <br/> <br/> For us, it’s not just
          about where we come from or where we’re headed it’s about the beauty
          we discover along the way. Ready to explore the journey of Code
          Silver?
        </Typography>
      </Stack>
      <Stack width={"60%"} position={"relative"} height={"100vh"}>
        <Slider ref={TraditionsliderRef} {...settings}>
          {bannerImages.map((img, index) => (
            <Stack
              key={index}
              width="100%"
              height="100vh"
              sx={{
                backgroundImage: `url(${img.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            ></Stack>
          ))}
        </Slider>
        <Stack
          direction="row"
          gap="10px"
          position="absolute"
          bottom="50%"
          left="1%"
        >
          <Stack
            sx={{
              border: "2px solid white",
              borderRadius: "100px",
              justifyContent: "center",
              alignItems: "center",
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
            onClick={() => TraditionsliderRef.current.slickNext()}
          >
            <IoIosArrowBack
              style={arrowStyle1}
              onMouseEnter={() => setArrowStyle1(hoverStyle)}
              onMouseLeave={() => setArrowStyle1(normalStyle)}
            />
          </Stack>
        </Stack>

        <Stack
          direction="row"
          gap="10px"
          position="absolute"
          bottom="50%"
          right="1%"
        >
          <Stack
            sx={{
              border: "2px solid white",
              borderRadius: "100px",
              justifyContent: "center",
              alignItems: "center",
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
            onClick={() => TraditionsliderRef.current.slickNext()}
          >
            <IoIosArrowForward
              style={arrowStyle2}
              onMouseEnter={() => setArrowStyle2(hoverStyle)}
              onMouseLeave={() => setArrowStyle2(normalStyle)}
            />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Tradition;
