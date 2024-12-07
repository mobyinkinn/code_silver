import { Stack, Typography } from "@mui/material";

export default function ProductItem({ product }) {
  console.log(product);
  return (
    <Stack
      width={"25%"}
      marginBottom={"30px"}
      alignItems={"center"}
      gap={"10px"}
    >
      <Stack
        sx={{
          cursor: "pointer",
          marginX: "auto",
          backgroundImage: `url(${product.image.src})`,
          backgroundSize: "100%",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          height: "22vw",
          width: "22vw",
          borderRadius: "20px",
          //   transition: "background-size 0.5s ease",
          transition: "all 0.1s ease-in",

          "&:hover": {
            backgroundSize: "110%",
            transition: "all 0.3s ease-in",
          },
        }}
      ></Stack>
      <Typography fontSize={"1.2rem"} width={"80%"} textAlign={"center"}>
        {product.name}
      </Typography>
      <Typography width={"80%"} textAlign={"center"}>
        ${product.price}
      </Typography>
    </Stack>
  );
}
