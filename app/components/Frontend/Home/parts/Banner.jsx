"use client"

import { Box, Stack, Typography } from '@mui/material'
import React, { useRef, useState } from 'react'
import banner from "../assets/Banner.jpg";
import banner2 from "../assets/Banner2.png";
import banner3 from "../assets/Banner3.png";
import Navbar from '../../navbar/Navbar';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

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

const bannerImages = [banner, banner2, banner3]; // You can replace this with actual images

const Banner = () => {
  const [arrowStyle1, setArrowStyle1] = useState(normalStyle);
  const [arrowStyle2, setArrowStyle2] = useState(normalStyle);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    // <Stack
    //     width={"100%"}
    //     height={"100vh"}
    //     sx={{
    //       backgroundImage: `url(${banner.src})`,
    //       backgroundSize: "cover",
    //       backgroundPosition: "center center",
    //     }}
    //     justifyContent={"center"}
    //     gap={"10px"}
    //   >
    //     <Navbar/>
    //   </Stack>
    <Stack width={"100%"}>
      <Navbar color={"transparent"} />

      <Slider ref={sliderRef} {...settings}>
        {bannerImages.map((img, index) => (
          <Stack
            key={index}
            width="100vw"
            height="100vh"
            sx={{
              backgroundImage: `url(${img.src})`, // Directly use the image path
              backgroundSize: "cover",
              backgroundPosition: "center center",
              display: "flex",
            }}
          >
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              position={"absolute"}
              gap="10px"
              sx={{ color: "white" }}
              top={"40%"}
              left={"15%"}
            >
              <Typography fontSize={"80px"}>Code Silver</Typography>
              <Box sx={{content:"''", width:"300px", height:"1px", bgcolor:"white"}}/>
              <Typography fontSize={"25px"} textAlign={"center"} width={"266px"}>Redefining silver, one accent at a time!</Typography>
            </Stack>
          </Stack>
        ))}
      </Slider>
      <Stack direction="row" gap="10px" position="absolute" top="50%" left="1%">
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
          onClick={() => sliderRef.current.slickPrev()}
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
        top="50%"
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
          onClick={() => sliderRef.current.slickNext()}
        >
          <IoIosArrowForward
            style={arrowStyle2}
            onMouseEnter={() => setArrowStyle2(hoverStyle)}
            onMouseLeave={() => setArrowStyle2(normalStyle)}
          />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Banner
