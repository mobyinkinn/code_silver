"use client";

import styled from "@emotion/styled";
const breakpoints = {
  xs: "@media (max-width: 299px)",
  sm: "@media (min-width: 300px) and (max-width: 430px)", // Mobile
  smm: "@media (min-width: 430px) and (max-width: 600px)", // Mobile
  md: "@media (min-width: 601px) and (max-width: 1024px)", // Tablet
  lg: "@media (min-width: 1025px)", // Desktop
};

const SearchInput = styled.input((props) => ({
  width: "200px",
  outline: "none",
  border: "1px solid #005900",
  padding: "10px 10px",
  borderRadius: props.borderRadius || "10px",
  color: "#000",
}));

const SearchInputHero = styled.div((props) => ({
  outline: "none",
  width: props.width || "180px",
  border: "1px solid",
  borderColor: props.color || "#fff",
  backgroundColor: props.bgColor || "#fff",
  display: "flex",
  alignItems: "center",
  gap: "20px",
  fontSize: "1.2rem",
  padding: "10px 20px",
  borderRadius: "40px",
  color: props.color || "#379237",
}));

const TextInput = styled.input((props) => ({
  width: props.width || "100%",
  outline: "none",
  border: "1px solid rgba(45, 45, 45, 0.2)",
  borderRadius: "100px",
  padding: props.padding?.lg || "15px 30px",
  fontSize: "1.2rem",
  color: props.color || "#000000",
  backgroundColor: props.bgColor,

  // Add ::placeholder styling here
  "::placeholder": {
    color: props.placeholderColor || "gray", // Set your desired placeholder color
    opacity: 1,
  },

  fontSize: props.fontSize?.lg || "1.2rem",

  // Breakpoint-specific font sizes
  [breakpoints.md]: {
    fontSize: props.fontSize?.md || "1.2rem",
    padding: props.padding?.md || "10px",
  },
  [breakpoints.smm]: {
    fontSize: props.fontSize?.smm || "1rem",
    padding: props.padding?.smm || "5px",
  },
  [breakpoints.sm]: {
    fontSize: props.fontSize?.sm || "0.9rem",
    padding: props.padding?.sm || "5px",
  },
}));

const TextArea = styled.textarea((props) => ({
  width: "100%",
  outline: "none",
  border: "1px solid #ddd",
  borderRadius: "30px",
  padding: "25px 55px",
  fontSize: "1.2rem",
  color: "#000",
  backgroundColor: props.bgColor,
  border: "1px solid rgba(45, 45, 45, 0.2)",

  fontSize: props.fontSize?.lg || "1.2rem",

  // Breakpoint-specific font sizes
  [breakpoints.md]: {
    fontSize: props.fontSize?.md || "1.2rem",
    padding: props.padding?.md || "10px",
  },
  [breakpoints.smm]: {
    fontSize: props.fontSize?.smm || "1rem",
    padding: props.padding?.smm || "5px",
  },
  [breakpoints.sm]: {
    fontSize: props.fontSize?.sm || "0.9rem",
    padding: props.padding?.sm || "5px",
  },
}));

const Label = styled.span((props) => ({
  width: "250px",
  padding: "5px 10px",
  marginTop: "10px",
  fontSize: "1.2rem",
  color: "black",

  fontSize: props.fontSize?.lg || "1.2rem",

  // Breakpoint-specific font sizes
  [breakpoints.md]: {
    fontSize: props.fontSize?.md || "1.2rem",
  },
  [breakpoints.smm]: {
    fontSize: props.fontSize?.smm || "1rem",
  },
  [breakpoints.sm]: {
    fontSize: props.fontSize?.sm || "0.9rem",
  },
}));

export { SearchInput, SearchInputHero, TextInput, Label, TextArea };
