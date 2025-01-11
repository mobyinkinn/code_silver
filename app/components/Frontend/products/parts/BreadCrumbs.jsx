"use client";

import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { Box } from "@mui/material";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function BasicBreadcrumbs() {
  return (
    <Box
      marginTop={"80px"}
      role="presentation"
      padding={"50px 40px 20px 40px"}
      onClick={handleClick}
    >
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          color="inherit"
          href="/"
          style={{ fontSize: "12px" }}
        >
          Code Silver
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/collections/BestSellers"
          style={{ fontSize: "12px" }}
        >
          Religious Collection
        </Link>
        <Typography sx={{ color: "text.primary" }} style={{ fontSize: "12px" }}>
          Silver Plated Laxmi Charan with Chowki
        </Typography>
      </Breadcrumbs>
    </Box>
  );
}
