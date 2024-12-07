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
      padding={"20px 50px"}
      onClick={handleClick}
    >
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Code Silver
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          Religious Collection
        </Link>
        <Typography sx={{ color: "text.primary" }}>
          Silver Plated Laxmi Charan with Chowki
        </Typography>
      </Breadcrumbs>
    </Box>
  );
}
