import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import banner from "../assets/24.png";
import banner1 from "../assets/18.jpg";
import banner2 from "../assets/19.jpg";
import banner3 from "../assets/20.jpg";
import Image from 'next/image';

const Contact = () => {
  return (
    <Stack
      width="100%"
      position="relative"
      direction={"row"}
      bgcolor={"#ebebeb"}
    >
      {/* Background */}
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        sx={{
          backgroundImage: `url(${banner.src})`,
          backgroundSize: "40%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top right",
        }}
      />
      <Stack width="58%" height={"100vh"} direction={"row"}>
        <Stack width={"50%"} height={"100%"}>
          <Stack height={"50%"} width={"100%"} position={"relative"}>
            <Image src={banner2.src} fill objectFit="cover" />
          </Stack>
          <Stack height={"50%"} width={"100%"} position={"relative"}>
            <Image src={banner3.src} fill objectFit="cover" />
          </Stack>
        </Stack>
        <Stack width={"50%"} height={"100%"} position={"relative"}>
          <Image
            src={banner1.src}
            fill
            objectFit="cover"
            objectPosition="left"
          />
        </Stack>
      </Stack>
      <Stack width={"42%"} justifyContent={"space-between"} p={"40px 0"}>
        <Stack textAlign={"right"}>
          <Typography p="0 40px" fontSize="55px" pl={5}>
            Come to
          </Typography>
          <Typography p="0 40px" fontSize="75px" lineHeight={1}>
            Code Silver
          </Typography>
          <Box
            mt={2}
            sx={{
              content: "''",
              height: "1px",
              width: "450px",
              bgcolor: "black",
            }}
          />
        </Stack>
        <Stack textAlign={"right"} alignItems={"end"}>
          <Typography p="0 40px" fontSize="20px" pl={5} color="grey">
            Find Our Store
          </Typography>
          <Box
            mt={2}
            sx={{
              content: "''",
              height: "1px",
              width: "350px",
              bgcolor: "black",
            }}
          />
          <Typography p="20px 40px" fontSize="28px" lineHeight={1.5}>
            Emerald House, D-31, Subhash Marg, Panch Batti, C Scheme, Ashok
            Nagar, Jaipur,Rajasthan 302001
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Contact