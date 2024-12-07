"use client";

import styled from "@emotion/styled";

const ParaNormal = styled.span((props) => ({
  color: props.color || "black",
  fontWeight: props.fontWeight,
  textAlign: props.textAlign || "left",
  width: props.width,
  margin: props.margin,
  lineHeight: props.lineHeight || "1.5",
  fontSize: "1.2rem",
}));

const ParaNormalSmall = styled.span((props) => ({
  color: props.color || "black",
  fontWeight: props.fontWeight,
  textAlign: props.textAlign || "left",
  width: props.width,
  margin: props.margin,
  lineHeight: props.lineHeight || "1.5",
  fontSize: "1rem",
}));

export { ParaNormal, ParaNormalSmall };
