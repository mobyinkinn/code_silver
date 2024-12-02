
// "use client";

// import React, { useRef, useState } from "react";
// import { Box, Stack, Typography } from "@mui/material";
// import Slider from "react-slick";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import banner from "../assets/clientslogos/1.png";
// import banner1 from "../assets/clientslogos/2.png";
// import banner2 from "../assets/clientslogos/3.png";
// import banner3 from "../assets/clientslogos/4.png";
// import banner4 from "../assets/clientslogos/5.png";
// import banner5 from "../assets/clientslogos/6.png";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// const normalStyle = {
//   height: "20px",
//   cursor: "pointer",
//   width: "20px",
//   color: "black",
// };

// const hoverStyle = {
//   height: "20px",
//   cursor: "pointer",
//   width: "20px",
//   color: "black",
// };
// const Clients = () => {
//   const [arrowStyle1, setArrowStyle1] = useState(normalStyle);
//   const [arrowStyle2, setArrowStyle2] = useState(normalStyle);
//   const clientsslider = useRef(null);
//   const settings = {
//     dots: false, // Add dots for debugging
//     infinite: true,
//     speed: 500,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     arrows: false,
//   };

//   const bannerImages = [banner, banner1, banner2, banner3, banner4, banner5];

//   return (
//     <Stack
//       position={"relative"}
//       sx={{
//         width: "100%",
//         height: "100%",
//       }}
//     >
//       <Slider ref={clientsslider} {...settings}>
//         {bannerImages.map((img, index) => (
//           <Box
//             key={index}
//             height="30vh"
//             sx={{
//               backgroundImage: `url(${img.src})`,
//               backgroundSize: "50%",
//               backgroundRepeat:"no-repeat",
//               backgroundPosition: "center center",
//             }}
//           />
//         ))}
//       </Slider>
//       <Stack
//         direction="row"
//         gap="10px"
//         position="absolute"
//         bottom="65%"
//         left="1%"
//       >
//         <Stack
//           sx={{
//             border: "2px solid black",
//             borderRadius: "100px",
//             justifyContent: "center",
//             alignItems: "center",
//             "&:hover": {
//               backgroundColor: "transparent",
//             },
//           }}
//           onClick={() => clientsslider.current.slickPrev()}
//         >
//           <IoIosArrowBack
//             style={arrowStyle1}
//             onMouseEnter={() => setArrowStyle1(hoverStyle)}
//             onMouseLeave={() => setArrowStyle1(normalStyle)}
//           />
//         </Stack>
//       </Stack>
//       <Stack
//         direction="row"
//         gap="10px"
//         position="absolute"
//         bottom="65%"
//         right="1%"
//       >
//         <Stack
//           sx={{
//             border: "2px solid black",
//             borderRadius: "100px",
//             justifyContent: "center",
//             alignItems: "center",
//             "&:hover": {
//               backgroundColor: "transparent",
//             },
//           }}
//           onClick={() => clientsslider.current.slickNext()}
//         >
//           <IoIosArrowForward
//             style={arrowStyle2}
//             onMouseEnter={() => setArrowStyle2(hoverStyle)}
//             onMouseLeave={() => setArrowStyle2(normalStyle)}
//           />
//         </Stack>
//       </Stack>
//     </Stack>
//   );
// };

// export default Clients;

"use client";

import React, { useRef, useState } from "react";
import { Box, Stack } from "@mui/material";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import banner from "../assets/clientslogos/1.png";
import banner1 from "../assets/clientslogos/2.png";
import banner2 from "../assets/clientslogos/3.png";
import banner3 from "../assets/clientslogos/4.png";
import banner4 from "../assets/clientslogos/5.png";
import banner5 from "../assets/clientslogos/6.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const normalStyle = {
  height: "20px",
  cursor: "pointer",
  width: "20px",
  color: "black",
};

const hoverStyle = {
  height: "20px",
  cursor: "pointer",
  width: "20px",
  color: "black",
};

const Clients = () => {
  const [arrowStyle1, setArrowStyle1] = useState(normalStyle);
  const [arrowStyle2, setArrowStyle2] = useState(normalStyle);
  const clientsslider = useRef(null);

  const settings = {
    dots: false, // Disable dots
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false, // Disable default arrows
  };

  const bannerImages = [banner, banner1, banner2, banner3, banner4, banner5];

  return (
    <Stack
      position={"relative"}
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <Slider ref={clientsslider} {...settings}>
        {bannerImages.map((img, index) => (
          <Box
            key={index}
            height="30vh"
            sx={{
              backgroundImage: `url(${img.src})`,
              backgroundSize: "50%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              filter: "grayscale(100%)", // Grayscale effect
              transition: "filter 0.3s ease-in-out", // Smooth transition
              "&:hover": {
                filter: "grayscale(0%)", // Remove grayscale on hover
              },
            }}
          />
        ))}
      </Slider>
      {/* <Stack
        direction="row"
        gap="10px"
        position="absolute"
        bottom="65%"
        left="1%"
      >
        <Stack
          sx={{
            border: "2px solid black",
            borderRadius: "100px",
            justifyContent: "center",
            alignItems: "center",
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
          onClick={() => clientsslider.current.slickPrev()}
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
        bottom="65%"
        right="1%"
      >
        <Stack
          sx={{
            border: "2px solid black",
            borderRadius: "100px",
            justifyContent: "center",
            alignItems: "center",
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
          onClick={() => clientsslider.current.slickNext()}
        >
          <IoIosArrowForward
            style={arrowStyle2}
            onMouseEnter={() => setArrowStyle2(hoverStyle)}
            onMouseLeave={() => setArrowStyle2(normalStyle)}
          />
        </Stack>
      </Stack> */}
    </Stack>
  );
};

export default Clients;
