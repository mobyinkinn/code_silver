"use client";

import { Stack } from "@mui/material";
import { ContainerMain } from "./Container";
import { Head1 } from "./Headings";
import { ParaNormal } from "./Para";

const BannerImage = ({
  image,
  overlayColor,
  title,
  description,
  align,
  textcenter,
  color,
  descolor,
  heights,
  padding
}) => {
  return (
    <ContainerMain gap="0" dir="row" padding="0" id="about">
      <Stack
        width={"100%"}
        height={heights||"90vh"}
        alignItems={"center"}
        sx={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
        justifyContent={"center"}
        gap={"10px"}
      >
        <Stack
          bgcolor={overlayColor}
          width={"100%"}
          height={"100%"}
          justifyContent={"center"}
          pl={padding||0}
        >
          <Stack alignItems={align || "center"} gap={1}>
            <Stack direction={"row"}>
              <Head1 color={color||"white"}>{title}</Head1>
            </Stack>
            <ParaNormal width="63%" color={descolor || "white"} textAlign={textcenter||"center"}>
              {description}
            </ParaNormal>
          </Stack>
        </Stack>
      </Stack>
    </ContainerMain>
  );
};

export default BannerImage;
