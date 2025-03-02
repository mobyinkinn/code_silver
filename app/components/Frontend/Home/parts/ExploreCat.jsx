"use client"

import React, { useRef, useState } from "react";
import left from "../assets/Circleleftbottom.png";
import { Box, Stack, Typography } from "@mui/material";
import Slider from "react-slick";
import banner from "../assets/7.jpg";
import banner2 from "../assets/8.jpg";
import banner3 from "../assets/9.png";
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

const ExploreCat = () => {
  const [arrowStyle1, setArrowStyle1] = useState(normalStyle);
  const [arrowStyle2, setArrowStyle2] = useState(normalStyle);
  const [currentSlide, setCurrentSlide] = useState(0); // Tracks current slide
  const CatsliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex), // Update progress bar
  };

  const handleNext = () => {
    CatsliderRef.current.slickNext();
  };

  const handlePrev = () => {
    CatsliderRef.current.slickPrev();
  };

  // Calculate the progress bar width
  const progressBarWidth = ((currentSlide + 1) / bannerImages.length) * 100;

  return (
    <Stack
      width={"100%"}
      direction={"row"}
      position={"relative"}
      pt={5}
      height={"100%"}
    >
      <Image src={left.src} fill objectFit="contain" objectPosition="left" />
      <Stack
        width={"33%"}
        bgcolor={"#ebebeb"}
        justifyContent={"center"}
        height={"100vh"}
      >
        <Typography fontSize={"40px"} pl={5}>
          Explore
        </Typography>
        <Typography fontSize={"53px"} pl={5} lineHeight={1}>
          Our Categories
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
        <Typography p={"16px 40px"} fontSize={"20px"}>
          Curated to provide unmatched sophistication
        </Typography>
      </Stack>
      <Stack width={"67%"} position={"relative"} height={"100vh"}>
        <Slider ref={CatsliderRef} {...settings}>
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
            onClick={handlePrev}
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
            onClick={handleNext}
          >
            <IoIosArrowForward
              style={arrowStyle2}
              onMouseEnter={() => setArrowStyle2(hoverStyle)}
              onMouseLeave={() => setArrowStyle2(normalStyle)}
            />
          </Stack>
        </Stack>

        {/* Progress Bar */}
        <Box
          position="absolute"
          bottom="-3%"
          left="50%"
          width="90%"
          height="2px"
          bgcolor="lightgray"
          sx={{ transform: "translateX(-50%)" }}
        >
          <Box
            height="100%"
            bgcolor="black"
            sx={{
              width: `${progressBarWidth}%`,
              transition: "width 0.5s ease",
            }}
          />
        </Box>
      </Stack>
    </Stack>
  );
};

export default ExploreCat;
