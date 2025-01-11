import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import circle from "./assets/Map.png";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
const Footer = () => {
  const data = [
    {
      heading: "About",
      items: [
        {
          name: "About Us",
        },
        {
          name: "Blogs",
        },
        {
          name: "Contact us",
        },
        {
          name: "Events & Publications",
        },
      ],
    },
    {
      heading: "Quick links",
      items: [
        {
          name: "Privacy",
        },
        {
          name: "Terms & Conditions",
        },
        {
          name: "Returns & Refund",
        },
        {
          name: "Shipping & Delivery",
        },
        {
          name: "FAQs",
        },
      ],
    },
    {
      heading: "Customer Service",
      items: [
        {
          name: "Help",
        },
        {
          name: "Track Your Order",
        },
        {
          name: "Become Our Affiliate Partner",
        },
      ],
    },
    {
      heading: "Contact Us",
      items: [
        {
          name: "+91-92162 24984",
        },
        {
          name: "+91-9950 090179",
        },
        {
          name: "+91-83068 77706",
        },
        {
          name: "+91-99500 94777",
        },
        {
          name: "+91-97993 32768",
        },
      ],
    },
  ];
  const icon = [
    {
      icon: FaFacebookF,
    },
    {
      icon: FaInstagram,
    },
    {
      icon: FaYoutube,
    },
    {
      icon: FaLinkedinIn,
    },
    {
      icon: BiLogoGmail,
    },
  ];
  return (
    <Stack alignItems={"center"}>
      <Stack
        width={"95%"}
        borderRadius={"40px"}
        sx={{
          bgcolor: "black",
          backgroundImage: `url(${circle.src})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
        justifyContent={"end"}
        p={"60px 40px 40px 40px"}
      >
        <Stack direction={"row"} gap={"10px"} justifyContent={"center"}>
          <Stack width={"20%"} pl={1} gap={2} borderRight={"1px solid white"}>
            <Typography color="white" fontSize={"15px"} fontWeight={"bold"}>
              Find us on
            </Typography>
            <Stack
              direction={"row"}
              gap={4}
              flexWrap={"wrap"}
              alignItems={"center"}
            >
              {icon.map((d, i) => (
                <Stack
                  key={i}
                  justifyContent={"center"}
                  alignItems={"center"}
                  width={"30px"}
                  height={"30px"}
                  bgcolor={"white"}
                  borderRadius={"50%"}
                >
                  <d.icon color="black" size={20} />
                </Stack>
              ))}
              <Typography color="white">info@codesilver.in</Typography>
            </Stack>
          </Stack>
          <Stack width={"72%"} direction={"row"}>
            {data.map((el, index) => (
              <Stack
                key={index}
                spacing={2}
                width={"25%"}
                ml={"31px"}
                borderRight={
                  el.heading !== "Contact Us" ? "1px solid white" : ""
                }
              >
                {/* Heading */}
                <Stack>
                  <Typography
                    fontSize={"15px"}
                    color="white"
                    fontWeight={"bold"}
                  >
                    {el.heading}
                  </Typography>
                </Stack>

                {/* Items list */}
                <Stack width={{ xs: "100%", sm: "75%" }} spacing={1}>
                  {el.items.map((item, idx) => (
                    <Typography
                      key={idx}
                      fontSize={"15px"}
                      color="white"
                      sx={{ cursor: "pointer" }}
                      _hover={{ color: "#FB5457" }}
                    >
                      {item.name}
                    </Typography>
                  ))}
                </Stack>
              </Stack>
            ))}
          </Stack>
        </Stack>
        <Typography
          color="white"
          textAlign={"center"}
          fontSize={"15px"}
          mt={"30px"}
        >
          © 2024, Copyright Code Silver
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Footer;
