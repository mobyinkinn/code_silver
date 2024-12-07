"use client";

import { Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `Rs.${value}`;
}

export default function PriceButton() {
  const [value, setValue] = useState([0, 125000]);
  const [showSetting, setShowSettings] = useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Stack position="relative" marginBottom={"30px"}>
      <Stack
        direction={"row"}
        gap="40px"
        alignItems={"center"}
        sx={{
          cursor: "pointer",
          border: "1px solid #ddd",
          padding: "10px 30px",
          width: "fit-content",
          transition: "all 0.3s ease",
          "&:hover": {
            border: "1px solid #000",
          },
        }}
        onClick={() => {
          setShowSettings((val) => !val);
        }}
      >
        <Typography>PRICE </Typography>
        <FaAngleDown />
      </Stack>
      <Stack
        position="absolute"
        gap="20px"
        sx={{
          backgroundColor: "white",
          padding: "30px",
          border: "1px solid #ddd",
          top: "120%",
        }}
        display={!showSetting && "none"}
        onMouseLeave={() => setShowSettings(false)}
      >
        <Typography>The highest price is Rs.125,000.00</Typography>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Stack
            direction={"row"}
            sx={{
              border: "1px solid #ddd",
              padding: "8px 16px",
              gap: "10px",
            }}
          >
            <Typography
              sx={{
                paddingRight: "10px",
                borderRight: "1px solid #ddd",
              }}
            >
              ₹
            </Typography>
            <Typography>{value[0]}</Typography>
          </Stack>
          <Typography>-</Typography>
          <Stack
            direction={"row"}
            sx={{
              border: "1px solid #ddd",
              padding: "8px 16px",
              gap: "10px",
            }}
          >
            <Typography
              sx={{
                paddingRight: "10px",
                borderRight: "1px solid #ddd",
              }}
            >
              ₹
            </Typography>
            <Typography>{value[1]}</Typography>
          </Stack>
        </Stack>
        <Box sx={{ width: 300 }}>
          <Slider
            getAriaLabel={() => "Price"}
            value={value}
            max={125000}
            onChange={handleChange}
            valueLabelDisplay="auto"
            color="black"
            getAriaValueText={valuetext}
          />
        </Box>
      </Stack>
    </Stack>
  );
}
