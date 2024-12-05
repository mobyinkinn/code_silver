import { Button, Stack, Typography } from "@mui/material";
import img from "./assets/lakshmiCharan.png";
import Image from "next/image";
import { CiCircleChevDown } from "react-icons/ci";
import { TiSocialInstagramCircular } from "react-icons/ti";

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

export default function ProductItem() {
  return (
    <Stack margin={"40px"} marginTop={"100px"} direction="row">
      <Stack width={"50%"} gap={"10px"} height={"140vh"}>
        <Stack position={"relative"} width={"100%"} height={"90vh"}>
          <Image src={productData.image} alt="" fill objectFit="cover" />
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
      <Stack width={"50%"}>
        <Stack padding={"40px"} gap={"30px"}>
          <Typography fontSize={"1.7rem"} fontWeight={"bold"}>
            {productData.name}
          </Typography>
          <Stack
            style={{
              height: "2px",
              width: "60%",
              backgroundColor: "#ddd",
              position: "relative",
              right: "40px",
            }}
          ></Stack>
          <Typography
            sx={{
              paddingBottom: "10px",
              borderBottom: "2px solid #ddd",
            }}
          >
            MRP{" "}
            <span style={{ fontSize: "1.4rem", fontWeight: "bold" }}>
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
          <Stack>
            <Typography fontSize={"0.9rem"}>
              Pickup Available at <b>EMRALD HOUSE</b>
            </Typography>
            <Typography fontSize={"0.8rem"}>
              Usually Ready in 2-3 Business days
            </Typography>
            <Stack direction="row">
              <Typography fontSize={"0.8rem"} width={"140px"}>
                Address:{" "}
              </Typography>
              <Typography fontSize={"0.8rem"}>Code Silver D 31</Typography>
            </Stack>
          </Stack>
          <Stack>
            <Typography fontSize="1.4rem">Product Description</Typography>
            <Stack
              style={{
                height: "1px",
                width: "40%",
                backgroundColor: "#000",
                marginBottom: "15px",
              }}
            ></Stack>
            <Typography>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Explicabo quidem fugiat aperiam veritatis sed, itaque quibusdam
              provident. Delectus amet aliquam minus, totam hic architecto
              commodi, eos qui eius dolor possimus.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
