import { Button, Stack, Typography } from "@mui/material";
import img1 from "./assets/2.png";
import img2 from "./assets/7.png";
import img3 from "./assets/4.png";
import img4 from "./assets/5.png";
import img5 from "./assets/6.png";
import ProductItem from "./ProductItem";
import PriceButton from "./PriceButton";
import BestSelling from "./BestSelling";

const productData = [
  {
    image: img1,
    weight: "",
    name: "Silver plated Laxmi Charan With Chowki",
    price: "2100",
    status: true,
    noOfProducts: "12",
    reviews: [],
    isDraft: "false",
    description: "",
    medias: [img1, img1],
    varients: "",
    tags: "",
    collectionId: "",
    discountId: "",
  },
  {
    image: img2,
    weight: "",
    name: "Ganesh Ji Pratima",
    price: "2100",
    status: true,
    noOfProducts: "12",
    reviews: [],
    isDraft: "false",
    description: "",
    medias: [img2, img2],
    varients: "",
    tags: "",
    collectionId: "",
    discountId: "",
  },
  {
    image: img3,
    weight: "",
    name: "Diya",
    price: "2100",
    status: true,
    noOfProducts: "12",
    reviews: [],
    isDraft: "false",
    description: "",
    medias: [img3, img3],
    varients: "",
    tags: "",
    collectionId: "",
    discountId: "",
  },
  {
    image: img4,
    weight: "",
    name: "Lota",
    price: "2100",
    status: true,
    noOfProducts: "12",
    reviews: [],
    isDraft: "false",
    description: "",
    medias: [img4, img4],
    varients: "",
    tags: "",
    collectionId: "",
    discountId: "",
  },
  {
    image: img5,
    weight: "",
    name: "Lakshmi Charan",
    price: "2100",
    status: true,
    noOfProducts: "12",
    reviews: [],
    isDraft: "false",
    description: "",
    medias: [img5, img5],
    varients: "",
    tags: "",
    collectionId: "",
    discountId: "",
  },
];

export default function ProductList({ title }) {
  return (
    <Stack padding={"30px"} gap={"20px"}>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <PriceButton />
        <BestSelling />
      </Stack>
      <Stack flexWrap={"wrap"} direction="row" justifyContent={"space-between"}>
        {productData.map((el, i) => {
          return <ProductItem product={el} key={i} />;
        })}
      </Stack>
      <Stack gap={"20px"}>
        <Typography textAlign={"center"} fontSize="0.9rem" color="#333">
          You have viewed 5 out of 5 results
        </Typography>
        <Button
          sx={{
            color: "black",
            border: "1px solid black",
            borderRadius: "0",
            width: "fit-content",
            padding: "10px 20px",
            margin: "0 auto",
            "&:hover": {
              color: "white",
              backgroundColor: "black",
            },
          }}
        >
          Load More
        </Button>
      </Stack>
    </Stack>
  );
}
