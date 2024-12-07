"use client";

import { Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const options = [
  { id: 0, value: "Best Selling" },
  { id: 1, value: "Price: Low to High" },
  { id: 2, value: "Price: High to Low" },
  { id: 3, value: "Alphabetically: A to Z" },
  { id: 4, value: "Alphabetically: Z to A" },
];

function valuetext(value) {
  return `Rs.${value}`;
}

export default function BestSelling() {
  const [value, setValue] = useState("Best Selling");
  const [showSetting, setShowSettings] = useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Stack position="relative" width="300px" marginBottom={"30px"}>
      <Stack
        direction={"row"}
        gap="40px"
        alignItems={"center"}
        justifyContent={"space-between"}
        sx={{
          cursor: "pointer",
          border: "1px solid #ddd",
          padding: "10px 20px",
          transition: "all 0.3s ease",
          "&:hover": {
            border: "1px solid #000",
          },
        }}
        onClick={() => {
          setShowSettings((val) => !val);
        }}
      >
        <Typography>{value}</Typography>
        <FaAngleDown />
      </Stack>
      <Stack
        onMouseLeave={() => setShowSettings(false)}
        position="absolute"
        sx={{
          backgroundColor: "white",
          border: "1px solid #ddd",
          top: "100%",
          width: "100%",
        }}
        display={!showSetting && "none"}
      >
        {options.map((el, i) => {
          return (
            <Typography
              sx={{
                padding: "5px 10px",
                cursor: "pointer",
                "&:hover": {
                  color: "white",
                  backgroundColor: "#333",
                },
              }}
              onClick={() => {
                setValue(el.value);
                setShowSettings(false);
              }}
            >
              {el.value}
            </Typography>
          );
        })}
      </Stack>
    </Stack>
  );
}
