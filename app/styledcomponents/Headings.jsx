"use client";

import styled from "@emotion/styled";

const Head1 = styled.span((props) => ({
  position: props.position,
  color: props.color || "Black",
  fontWeight: props.fontWeight || "bold",
  textAlign: props.textAlign || "center",
  width: props.width,
  fontSize: "1.2rem",
}));

const Head2 = styled.span((props) => ({
  color: props.color || "#379237",
  fontWeight: props.fontWeight || "bold",
  width: props.width,
  textAlign: props.textAlign || "center",
  fontSize: "5rem",
}));

const Head3 = styled.span((props) => ({
  color: props.color || "#379237",
  fontWeight: props.fontWeight || "bold",
  textAlign: props.textAlign || "center",
  width: props.width,
  fontSize: "1.8rem",
}));

const Head4 = styled.span((props) => ({
  color: props.color || "#379237",
  fontWeight: props.fontWeight || "bold",
  textAlign: props.textAlign || "center",
  width: props.width,
  fontSize: "1.3rem",
}));

export { Head1, Head2, Head3, Head4 };
