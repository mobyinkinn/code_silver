"use client";

import React, { useRef, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Head1 } from "@/app/styledcomponents/Headings";
import { ParaNormal } from "@/app/styledcomponents/Para";
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
const YouMayAlsoLike = ({
  bannerImages,
  position,
  width,
  slidesToShow,
  bottom,
  padding,
  paddinginner,
}) => {
  console.log("bannerimage", bannerImages);
  const [arrowStyle1, setArrowStyle1] = useState(normalStyle);
  const [arrowStyle2, setArrowStyle2] = useState(normalStyle);
  const DesisliderRef = useRef(null);
  const settings = {
    dots: false, // Add dots for debugging
    infinite: true,
    speed: 500,
    centerMode: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    centerPadding: padding,
    arrows: false,
    rtl: false,
  };

  return (
    <>
      <Head1 style={{ padding: "10px 0" }}>You May Also Like These</Head1>
      <Stack
        sx={{
          position: { position },
          width: { width },
          right: "0%",
          top: "35%",
          height: "100%",
        }}
      >
        <Box mt={2}>
          <Slider ref={DesisliderRef} {...settings}>
            {bannerImages.map((img, index) => (
              <>
                <Box
                  key={index}
                  sx={{
                    padding: paddinginner, // Add horizontal padding (gap)
                    boxSizing: "border-box",
                    width: "calc(100% / slidesToShow)", // Ensure slides fit
                  }}
                >
                  <Box
                    height="60vh"
                    sx={{
                      backgroundImage: `url(${img.src.src})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
                    }}
                  />
                  <Stack
                    bgcolor={"#ebebeb"}
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    p={"2px 5px"}
                  >
                    <Head1 style={{ fontSize: "1rem" }}>{img.title}</Head1>
                    <ParaNormal style={{ fontSize: "1rem" }}>
                      ₹ {img.price}
                    </ParaNormal>
                  </Stack>
                </Box>
              </>
            ))}
          </Slider>
        </Box>
        <Stack
          direction="row"
          gap="10px"
          position="absolute"
          bottom={bottom}
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
            onClick={() => DesisliderRef.current.slickPrev()}
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
          bottom={bottom}
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
            onClick={() => DesisliderRef.current.slickNext()}
          >
            <IoIosArrowForward
              style={arrowStyle2}
              onMouseEnter={() => setArrowStyle2(hoverStyle)}
              onMouseLeave={() => setArrowStyle2(normalStyle)}
            />
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default YouMayAlsoLike;
