import React from 'react'
import svg1 from "../assets/1.svg"
import svg2 from "../assets/2.svg";
import svg3 from "../assets/3.svg";
import svg4 from "../assets/4.svg";
import { Box, Stack } from '@mui/material';
import Image from "next/image";
const SvgIcons = () => {
    const data = [
      {
        icon: svg1,
      },
      {
        icon: svg2,
      },
      {
        icon: svg3,
      },
      {
        icon: svg4,
      },
    ];
  return (
    <Stack
      direction={"row"}
      justifyContent={"center"}
      gap={"50px"}
      width={"100%"}
    >
      <Stack width={"95%"} direction={"row"} gap={"50px"}>
        {data.map((d) => (
          <Stack
            width={"25%"}
            position={"relative"}
            height={"130px"}
            borderRadius={"20px"}
            sx={{
              bgcolor: "#ebebeb",
            }}
          >
            <Image
              src={d.icon}
              fill
              style={{padding:"10px"}}
              objectFit="contain"
              objectPosition="center center"
            />
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}

export default SvgIcons