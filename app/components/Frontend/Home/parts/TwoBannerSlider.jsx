// import React from 'react'

// const TwoBannerSlider = () => {
//   return (
//     <div>TwoBannerSlider</div>
//   )
// }

// export default TwoBannerSlider


"use client";

import { Box, Stack, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import banner from "../assets/1.jpg";
import banner2 from "../assets/2.jpg";
import banner3 from "../assets/1.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

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

const bannerImages = [
  {
    img: banner,
    title: "BestSellers",
    Desc: "Religious Range",
  },
  {
    img: banner2,
    title: "New Arrival",
    Desc: "Photoframes",
  },
  {
    img: banner3,
    title: "BestSellers",
    Desc: "Religious Range",
  },
]; // You can replace this with actual images

const TwoBannerSlider = () => {
  const [arrowStyle1, setArrowStyle1] = useState(normalStyle);
  const [arrowStyle2, setArrowStyle2] = useState(normalStyle);
  const TwosliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 2,
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
    <Stack width={"100%"} position={"relative"} gap={1}>
      <Slider ref={TwosliderRef} {...settings}>
        {bannerImages.map((img, index) => (
          <Stack
            key={index}
            width="100vw"
            height="100vh"
            sx={{
              backgroundImage: `url(${img.img.src})`, // Directly use the image path
              backgroundSize: "cover",
              backgroundPosition: "center center",
              display: "flex",
            }}
          >
            <Stack
              height="100%"
              direction="column"
              justifyContent="end"
              alignItems="start"
              //   position={"absolute"}
              gap="10px"
              sx={{ color: "white" }}
              pl={4}
              //   top={"40%"}
              //   left={"30%"}
            >
              <Typography fontSize={"60px"}>{img.title}</Typography>
              {/* <Box
                sx={{
                  content: "''",
                  height: "1px",
                  bgcolor: "white",
                }}
              /> */}
              <Typography fontSize={"23px"} pl={0.5}>
                {img.Desc}
              </Typography>
            </Stack>
          </Stack>
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
          onClick={() => TwosliderRef.current.slickPrev()}
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
          onClick={() => TwosliderRef.current.slickNext()}
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
};

export default TwoBannerSlider;
