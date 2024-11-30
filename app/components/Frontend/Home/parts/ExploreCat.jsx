"use client"

import React, { useRef, useState } from 'react'
import left from "../assets/Circleleftbottom.png";
import { Stack, Typography } from '@mui/material';
import Slider from "react-slick";
import banner from "../assets/7.jpg";
import banner2 from "../assets/8.jpg";
import banner3 from "../assets/9.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Image from 'next/image';

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
     const CatsliderRef = useRef(null);

     const settings = {
       dots: false,
       infinite: true,
       speed: 500,
       arrows: false,
       slidesToShow: 2.5,
       slidesToScroll: 1,
     };
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
        height={"100vh"}
        // sx={{
        //   backgroundImage: `url(${left.src})`, // Directly use the image path
        //   backgroundSize: "cover",
        //   bgcolor: "#ebebeb",
        //   backgroundPosition: "center center",
        // }}
      >
        <Typography fontSize={"35px"}>Explore</Typography>
        <Typography fontSize={"50px"}>Our Categories</Typography>
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
            onClick={() => CatsliderRef.current.slickPrev()}
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
            onClick={() => CatsliderRef.current.slickNext()}
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
}

export default ExploreCat