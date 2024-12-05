import { Stack } from "@mui/material";
import img from "./assets/lakshmiCharan.png";
import Image from "next/image";

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
    <Stack>
      <Stack>
        <Stack position={"relative"}>
          <Image src={productData.image.img} alt="" fill objectFit="cover" />
        </Stack>
        <Stack>
          <Stack position={"relative"}>
            <Image src={productData.medias[0]} alt="" fill objectFit="cover" />
          </Stack>
          <Stack position={"relative"}>
            <Image src={productData.medias[1]} alt="" fill objectFit="cover" />
          </Stack>
        </Stack>
      </Stack>
      <Stack></Stack>
    </Stack>
  );
}
