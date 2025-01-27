"use client";

import styled from "@emotion/styled";

const DarkGreenButtonSmall = styled.button((props) => ({
  backgroundColor: "transparent",
  width: "fit-content",
  outline: "none",
  border: "1px solid #005900",
  padding: "6px 20px",
  color: "Black",
  cursor: "pointer",
  display: "flex",
  gap: "8px",
  alignItems: "center",
  transition: "all 0.3s ease",
  "&:hover": {},
}));

export { DarkGreenButtonSmall };