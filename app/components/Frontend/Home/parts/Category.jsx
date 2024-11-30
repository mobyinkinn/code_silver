import React from 'react'
import banner from "../assets/3.jpg";
import banner2 from "../assets/4.jpg";
import banner3 from "../assets/5.jpg";
import banner4 from "../assets/6.jpg";
import { Box, Stack, Typography } from '@mui/material';

const Category = () => {
    const data = [
      {
        id: 1,
        Img: banner,
        title: "Home & decor",
      },
      {
        id: 2,
        Img: banner2,
        title: "Our Signature Collection",
      },
      {
        id: 3,
        Img: banner3,
        title: "Festive Collection",
      },
      {
        id: 4,
        Img: banner4,
        title: "Code Silver Wild",
      },
    ];
  return (
    <Stack gap={"2px"}>
      {data.map((d, index) => (
        <Stack
          key={d.id}
          width="100%"
          height="100vh"
          sx={{
            backgroundImage: `url(${d.Img.src})`, // Directly use the image path
            backgroundSize: "cover",
            backgroundPosition: "center center",
            display: "flex",
            justifyContent: "center",
            alignItems: d.id === 1 || d.id === 3 ? "end" : "start",
          }}
        >
          {/* Optional text or overlay on the image */}
          <Stack
            height={"100%"}
            direction="column"
            justifyContent="end"
            alignItems="center"
            gap="10px"
            sx={{ color: "white" }}
            p={"0 30px"}
          >
            <Typography
              fontSize={"60px"}
              width={d.id === 2 || d.id === 4 ? "438px" : "none"}
              textAlign={"center"}
            >
              {d.title}
            </Typography>
            <Stack justifyContent="center" alignItems="center">
              <Box
                sx={{
                  content: "''",
                  height: "1px",
                  width: "300px",
                  bgcolor: "white",
                }}
              />
              <Box
                sx={{
                  content: "''",
                  height: "300px",
                  width: "1px",
                  bgcolor: "white",
                }}
              />
            </Stack>
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
}

export default Category