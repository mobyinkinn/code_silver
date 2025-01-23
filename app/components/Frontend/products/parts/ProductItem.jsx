"use client";

import { Button, Stack, Typography } from "@mui/material";
import img from "./assets/lakshmiCharan.png";
import Image from "next/image";
import { CiCircleChevDown } from "react-icons/ci";
import { TiSocialInstagramCircular } from "react-icons/ti";
import ReactImageMagnify from "@blacklab/react-image-magnify";

const productData = {
  image: img,
  weight: "",
  name: "Silver plated Laxmi Charan With Chowki",
  price: "2100",
  status: true,
  noOfProducts: "12",
  reviews: [],
  isDraft: "false",
  description: "",
  medias: [img, img],
  varients: "",
  tags: "",
  collectionId: "",
  discountId: "",
};

export default function ProductItem({ name }) {
  return (
    <Stack direction="row">
      <Stack width={"55%"} gap={"10px"} height={"140vh"}>
        <Stack position={"relative"} width={"100%"} height={"90vh"}>
          <ReactImageMagnify
            imageProps={{
              src: productData.image.src,
              isFluidWidth: true,
              alt: productData.name,
            }}
            magnifiedImageProps={{
              src: productData.image.src,
              width: 1200,
              height: 1200,
            }}
            magnifyContainerProps={{
              height: 700,
              width: 700,
            }}
            portalProps={{
              horizontalOffset: 10,
            }}
          />
          {/* <Image src={productData.image} alt="" fill objectFit="cover" /> */}
        </Stack>
        <Stack direction={"row"} gap={"10px"} width={"100%"} height={"40vh"}>
          <Stack position={"relative"} width={"50%"} height={"40vh"}>
            <Image src={productData.medias[0]} alt="" fill objectFit="cover" />
          </Stack>
          <Stack position={"relative"} width={"50%"} height={"40vh"}>
            <Image src={productData.medias[1]} alt="" fill objectFit="cover" />
          </Stack>
        </Stack>
      </Stack>
      <Stack width={"45%"}>
        <Stack padding={"10px 10px 10px 60px"} gap={"20px"}>
          <Typography fontSize={"1.7rem"} fontWeight={500}>
            {name}
          </Typography>
          <Stack
            style={{
              height: "1px",
              width: "60%",
              backgroundColor: "#000000",
              position: "relative",
              right: "60px",
            }}
          ></Stack>
          <Typography
            sx={{
              paddingBottom: "10px",
              borderBottom: "1px solid #000",
            }}
          >
            MRP{" "}
            <span style={{ fontSize: "1.4rem", fontWeight: 400 }}>
              ₹ {productData.price}/-
            </span>{" "}
            inclusive of all taxes
          </Typography>
          <Stack direction="row">
            <Typography width={"140px"}>Material: </Typography>
            <Typography>Silver Plated </Typography>
          </Stack>
          <Stack direction="row">
            <Typography width={"140px"}>Size: </Typography>
            <Stack
              direction="row"
              backgroundColor="#ddd"
              padding="0px 10px"
              alignItems={"center"}
            >
              <Typography width={"150px"} textAlign="left">
                1.5 inches
              </Typography>
              <CiCircleChevDown />
            </Stack>
          </Stack>
          <Stack direction="row">
            <Typography width={"140px"}>Quantity: </Typography>
            <Stack direction="row" backgroundColor="#ddd" padding="0px 10px">
              <Typography>-</Typography>
              <Typography width={"100px"} textAlign="center">
                1
              </Typography>
              <Typography>+</Typography>
            </Stack>
          </Stack>
          <Stack direction="row" alignItems={"center"}>
            <Typography width={"140px"}>Share: </Typography>
            <Stack direction="row">
              <TiSocialInstagramCircular
                style={{
                  height: "30px",
                  width: "30px",
                }}
              />
              <TiSocialInstagramCircular
                style={{
                  height: "30px",
                  width: "30px",
                }}
              />
              <TiSocialInstagramCircular
                style={{
                  height: "30px",
                  width: "30px",
                }}
              />
            </Stack>
          </Stack>
          <Stack direction="row" gap={"5px"}>
            <Button
              sx={{
                width: "50%",
                backgroundColor: "white",
                border: "1px black solid",
                color: "black",
                borderRadius: "0",
                paddingY: "10px",
              }}
            >
              ADD TO CART
            </Button>
            <Button
              sx={{
                width: "50%",
                backgroundColor: "black",
                color: "white",
                borderRadius: "0",
                paddingY: "10px",
              }}
            >
              BUY NOW
            </Button>
          </Stack>
          <Stack gap={1}>
            <Stack>
              <Typography fontSize={"0.9rem"}>
                Pickup Available at <b>EMRALD HOUSE</b>
              </Typography>
              <Typography fontSize={"0.8rem"}>
                Usually Ready in 2-3 Business days
              </Typography>
            </Stack>
            <Stack direction="row">
              <Typography fontSize={"0.8rem"} width={"140px"}>
                Address:{" "}
              </Typography>
              <Typography fontSize={"0.8rem"}>
                Code Silver D-31 Subhash Marg C Scheme Ashok Nagar C Scheme
                Ashok Nagar 302001 Jaipur Rajasthan India
              </Typography>
            </Stack>
          </Stack>
          <Stack gap={4}>
            <Stack>
              <Typography fontSize="1.3rem">Product Description</Typography>
              <Stack
                style={{
                  height: "1px",
                  width: "40%",
                  backgroundColor: "#000",
                  marginBottom: "15px",
                }}
              ></Stack>
              <Typography fontWeight={300} fontSize={"1rem"}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Explicabo quidem fugiat aperiam veritatis sed, itaque quibusdam
                provident. Delectus amet aliquam minus, totam hic architecto
                commodi, eos qui eius dolor possimus.
              </Typography>
            </Stack>
            <Stack>
              <Typography fontSize="1.2rem" fontWeight={400}>Product Care</Typography>
              <Stack
                style={{
                  height: "1px",
                  width: "40%",
                  backgroundColor: "#000",
                  marginBottom: "15px",
                }}
              ></Stack>
              <Typography fontWeight={300} fontSize={"0.9rem"} m={"5px 0"}>
                1.)&nbsp;&nbsp;&nbsp;&nbsp; Lorem ipsum dolor sit, amet
                consectetur adipisicing elit.
              </Typography>
              <Typography fontWeight={300} fontSize={"0.9rem"} m={"5px 0"}>
                2.)&nbsp;&nbsp;&nbsp; provident. Delectus amet aliquam minus,
                totam hic architecto
              </Typography>
            </Stack>
            <Stack>
              <Typography fontSize="1.3rem">Shipping & Delivery</Typography>
              <Stack
                style={{
                  height: "1px",
                  width: "40%",
                  backgroundColor: "#000",
                  marginBottom: "15px",
                }}
              ></Stack>
              <Typography fontWeight={300} fontSize={"1rem"}>
                1.)&nbsp;&nbsp;&nbsp;&nbsp; Lorem ipsum dolor sit, amet
                consectetur adipisicing elit.
              </Typography>
              <Typography fontWeight={300} fontSize={"1rem"}>
                2.)&nbsp;&nbsp;&nbsp; provident. Delectus amet aliquam minus,
                totam hic architecto
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
