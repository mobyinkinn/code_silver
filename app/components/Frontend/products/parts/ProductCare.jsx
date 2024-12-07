import { Head1 } from '@/app/styledcomponents/Headings'
import { ParaNormal } from '@/app/styledcomponents/Para';
import { Box, Button, Stack, TextField } from '@mui/material'
import { BiLogoGmail } from "react-icons/bi";
import { MdWifiCalling3 } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

import React from 'react'

const ProductCare = () => {
    const icon = [
      {
        icon: FaWhatsapp,
        content: "Call or WhatsApp us",
      },
      {
        icon: MdWifiCalling3,
        content: "+91-1234567890",
      },
      {
        icon: BiLogoGmail,
        content: "info@codesilver.in",
      },
    ];
  return (
    <Stack
      width={"90%"}
      bgcolor={"#ebebeb"}
      p={5}
      alignItems={"center"}
      justifyContent={"center"}
      borderRadius={"20px"}
      direction={"row"}
    >
      <Stack
        width={"33%"}
        alignItems={"center"}
        justifyContent={"center"}
        height={"100%"}
      >
        <Head1 style={{ fontWeight: 550, fontSize: "1rem" }}>
          Have a Question? We can Help.
        </Head1>
        <ParaNormal style={{ fontSize: "0.9rem" }}>
          Mon-Sat - 9:30 AM TO 5:30 PM (IST)
        </ParaNormal>
      </Stack>
      <Stack
        width={"33%"}
        gap={1}
        alignItems={"center"}
        justifyContent={"center"}
        height={"100%"}
      >
        <Head1 style={{ fontWeight: "normal", fontSize: "1rem" }}>
          Customer Care Executive
        </Head1>
        <Stack gap={0.5}>
          {icon.map((d) => (
            <Stack direction={"row"} alignItems={"center"} gap={1}>
              <Stack
                justifyContent={"center"}
                alignItems={"center"}
                width={"30px"}
                height={"30px"}
                bgcolor={"white"}
                borderRadius={"50%"}
              >
                <d.icon color="black" size={20} />
              </Stack>
              <ParaNormal style={{ fontSize: "0.7rem" }}>
                {d.content}
              </ParaNormal>
            </Stack>
          ))}
        </Stack>
        <ParaNormal style={{ fontSize: "0.6rem" }}>
          or chat/DM us on our Instagram and Facebook page.
        </ParaNormal>
      </Stack>
      <Stack
        width={"33%"}
        alignItems={"center"}
        justifyContent={"center"}
        height={"100%"}
        gap={1}
      >
        <Head1 style={{ fontSize: "1rem" }}>Customer Reviews</Head1>
        <Stack direction={"row"} gap={1}>
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
        </Stack>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#ffffff",
            borderRadius: "25px",
            overflow: "hidden",
            width: "300px",
            height: "35px",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
          }}
        >
          <TextField
            placeholder="Write a Review"
            variant="standard"
            InputProps={{
              disableUnderline: true,
              style: { padding: "0 15px", fontSize: "16px", color: "#bbb" },
            }}
            sx={{
              flex: 1,
              backgroundColor: "transparent",
            }}
          />
          <Button
            sx={{
              backgroundColor: "#000",
              color: "#fff",
              borderRadius: "0",
              padding: "0 20px",
              height: "100%",
              "&:hover": {
                backgroundColor: "#333",
              },
            }}
          >
            Done
          </Button>
        </Box>
      </Stack>
    </Stack>
  );
}

export default ProductCare