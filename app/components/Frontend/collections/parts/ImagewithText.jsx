"use client";
import React, { useRef, useEffect } from "react";

const ImageWithText = ({ font = "Arial", fontSize = 20 }) => {
  const canvasRef = useRef(null);
const imageUrl =
  "https://preview.thingsremembered.com/preview.iglx?igOutput=Jpg85&productid=50944&itemid=138943&cmpid=2&sessionID=1050081785&value1=Rockwell&value2=jatin+hinduja%0d%0a";
  const text ="askjfdh"
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const image = new Image();
    image.src = imageUrl;

    image.onload = () => {
      // Draw the image
      canvas.width = image.width;
      canvas.height = image.height;
      ctx.drawImage(image, 0, 0);

      // Add text overlay
      ctx.font = `${fontSize}px ${font}`;
      ctx.fillStyle = "grey";
      ctx.textAlign = "center";
      ctx.fillText(text, canvas.width / 2, canvas.height / 1.1);
    };
  }, [imageUrl, text, font, fontSize]);

  return <canvas ref={canvasRef}></canvas>;
};

export default ImageWithText;
