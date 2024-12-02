// "use client"

// import { Box, Stack, Typography } from '@mui/material'
// import Image from 'next/image'
// import React, { useRef, useState } from "react";
// import banner from "../assets/22.png";
// import banner1 from "../assets/10.jpg";
// import banner2 from "../assets/12.jpg";
// import banner3 from "../assets/13.jpg";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// const normalStyle = {
//   height: "20px",
//   cursor: "pointer",
//   width: "20px",
//   color: "white",
// };

// const hoverStyle = {
//   height: "20px",
//   cursor: "pointer",
//   width: "20px",
//   color: "white",
// };
// const bannerImages = [banner3, banner2, banner1];

// const DesignStudio = () => {
//   const [arrowStyle1, setArrowStyle1] = useState(normalStyle);
//   const [arrowStyle2, setArrowStyle2] = useState(normalStyle);
//   const DesisliderRef = useRef(null);

// const settings = {
//   dots: false,
//   infinite: true,
//   speed: 500,
//   arrows: false,
//   slidesToShow: 2,
//   slidesToScroll: 1,
// };

//   return (
//     <Stack
//       width={"100%"}
//       direction={"row"}
//       position={"relative"}
//       pt={8}
//       sx={{
//         backgroundImage: `url(${banner.src})`,
//         backgroundSize: "20%",
//         backgroundRepeat: "no-repeat",
//         backgroundPosition: "top right",
//       }}
//     >
//       <Stack
//         sx={{
//           backgroundImage: `url(${banner1.src})`,
//           backgroundSize: "cover",
//           backgroundRepeat: "no-repeat",
//           backgroundPosition: "top right",
//         }}
//         width={"40%"}
//         height={"100vh"}
//       >
//         {/* <Image
//           src={banner1.src}
//           fill
//           objectFit="contain"
//           objectPosition="left"
//         /> */}

//         {/* <Typography fontSize={"40px"} pl={5}>
//           Explore
//         </Typography>
//         <Typography fontSize={"53px"} pl={5} lineHeight={1}>
//           Our Categories
//         </Typography>
//         <Box
//           mt={2}
//           sx={{
//             content: "''",
//             height: "1px",
//             width: "300px",
//             bgcolor: "black",
//           }}
//         />
//         <Typography p={"16px 40px"} fontSize={"20px"}>
//           Curated to provide unmatched sophistication
//         </Typography> */}
//       </Stack>
//       <Stack
//         pt={3}
//         width={"60%"}
//         bgcolor={"#ebebeb"}
//         height={"100vh"}
//         zIndex={-1}
//       >
//         <Typography fontSize={"45px"} pl={5}>
//           The Design Studio
//         </Typography>
//         <Box
//           mt={2}
//           sx={{
//             content: "''",
//             height: "1px",
//             width: "300px",
//             bgcolor: "black",
//           }}
//         />
//         <Typography p={"16px 40px"} fontSize={"20px"}>
//           Intricate Craftmenship
//         </Typography>
//       </Stack>
//         <Slider ref={DesisliderRef} {...settings}>
//           {bannerImages.map((img, index) => (
//             <Stack
//               key={index}
//               width="100vw"
//               height="100vh"
//               sx={{
//                 backgroundImage: `url(${img})`, // Directly use the image path
//                 backgroundSize: "cover",
//                 backgroundPosition: "center center",
//                 display: "flex",
//               }}
//             ></Stack>
//           ))}
//         </Slider>
//         <Stack
//           direction="row"
//           gap="10px"
//           position="absolute"
//           bottom="50%"
//           left="1%"
//         >
//           <Stack
//             sx={{
//               border: "2px solid white",
//               borderRadius: "100px",
//               justifyContent: "center",
//               alignItems: "center",
//               "&:hover": {
//                 backgroundColor: "transparent",
//               },
//             }}
//             onClick={() => DesisliderRef.current.slickPrev()}
//           >
//             <IoIosArrowBack
//               style={arrowStyle1}
//               onMouseEnter={() => setArrowStyle1(hoverStyle)}
//               onMouseLeave={() => setArrowStyle1(normalStyle)}
//             />
//           </Stack>
//         </Stack>
//         <Stack
//           direction="row"
//           gap="10px"
//           position="absolute"
//           bottom="50%"
//           right="1%"
//         >
//           <Stack
//             sx={{
//               border: "2px solid white",
//               borderRadius: "100px",
//               justifyContent: "center",
//               alignItems: "center",
//               "&:hover": {
//                 backgroundColor: "transparent",
//               },
//             }}
//             onClick={() => DesisliderRef.current.slickNext()}
//           >
//             <IoIosArrowForward
//               style={arrowStyle2}
//               onMouseEnter={() => setArrowStyle2(hoverStyle)}
//               onMouseLeave={() => setArrowStyle2(normalStyle)}
//             />
//           </Stack>
//         </Stack>
//     </Stack>
//   );
// }

// export default DesignStudio

"use client";

import React, { useRef, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Slider from "react-slick";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import banner from "../assets/22.png";
import banner1 from "../assets/10.jpg";
import Designslider from "./Designslider";
const DesignStudio = () => {

  return (
    <Stack width="100%" position="relative" direction={"row"} pt={8}>
      {/* Background */}
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        sx={{
          backgroundImage: `url(${banner.src})`,
          backgroundSize: "20%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top right",
        }}
      />
      <Stack
        width="40%"
        height="100vh"
        sx={{
          backgroundImage: `url(${banner1.src})`,
          backgroundSize: "cover",
          backgroundPosition: "top right",
        }}
      ></Stack>
      <Stack width="60%" height="100vh" bgcolor="#ebebeb" pt={3}>
        <Typography fontSize="45px" pl={5}>
          The Design Studio
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
        <Typography p="16px 40px" fontSize="20px">
          Intricate Craftsmanship
        </Typography>

        {/* <Box position="relative" mt={4} overflow="visible">
          <Slider ref={DesisliderRef} {...settings}>
            {bannerImages.map((img, index) => (
              <Box
                key={index}
                height="70vh"
                sx={{
                  backgroundImage: `url(${img.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                }}
              />
            ))}
          </Slider>
        </Box> */}
      </Stack>
      <Designslider />
    </Stack>
  );
};

export default DesignStudio;
