"use client";

import styled from "@emotion/styled";
const breakpoints = {
  sm: "@media (min-width: 300px) and (max-width: 430px)", // Mobile
  smm: "@media (min-width: 430px) and (max-width: 600px)", // Mobile
  md: "@media (min-width: 601px) and (max-width: 1000px)", // Tablet
  lg: "@media (min-width: 1025px)", // Desktop
};
// const ContainerMain = styled.div((props) => ({
//   border: props.border,
//   borderRadius: props.borderRadius,
//   position: props.position,
//   display: "flex",
//   flexDirection: props.dir || "column",
//   gap: props.gap || "20px",
//   backgroundColor: props.bgColor,
//   justifyContent: props.justifyContent,
//   alignItems: props.alignItems,
//   padding: props.padding || "50px",

//   ...(props.padding && {
//     padding: props.padding.lg,
//     [breakpoints.md]: {
//       padding: props.padding.md,
//     },
//     [breakpoints.smm]: {
//       padding: props.padding.smm,
//     },
//     [breakpoints.sm]: {
//       padding: props.padding.sm,
//     },
//   }),
//   ...(props.gap && {
//     gap: props.gap.lg,
//     [breakpoints.md]: {
//       gap: props.gap.md,
//     },
//     [breakpoints.smm]: {
//       gap: props.gap.smm,
//     },
//     [breakpoints.sm]: {
//       gap: props.gap.sm,
//     },
//   }),
// }));

const ContainerMain = styled.div((props) => ({
  border: props.border,
  borderRadius: props.borderRadius,
  position: props.position,
  justifyContent: props.justifyContent,
  alignItems: props.alignItems,
  backgroundColor: props.bgColor,
  flexDirection: props.flexDirection,

  // Default styles
  padding: props.padding?.lg || "50px",
  gap: props.gap?.lg || "20px",
  display: props.display?.lg || "flex",
  flexDirection: props.flexDirection?.lg || "column",

  // Breakpoint-specific styles
  [breakpoints.md]: {
    padding: props.padding?.md,
    gap: props.gap?.md,
    display: props.display?.md,
    flexDirection: props.flexDirection?.md,
  },
  [breakpoints.smm]: {
    padding: props.padding?.smm || "20px",
    gap: props.gap?.smm,
    display: props.display?.smm,
    flexDirection: props.flexDirection?.smm,
  },
  [breakpoints.sm]: {
    padding: props.padding?.sm || "20px",
    gap: props.gap?.sm,
    display: props.display?.sm,
    flexDirection: props.flexDirection?.sm,
  },
}));

export { ContainerMain };
