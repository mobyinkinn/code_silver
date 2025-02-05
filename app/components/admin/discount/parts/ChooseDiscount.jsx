"use client";

import { Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const discountOptions = [
  {
    id: 0,
    name: "Buy X get Y",
    description: "Discount products based on a customer's purchase.",
    type: "buyXGetY",
  },
  {
    id: 1,
    name: "Amount off products",
    description: "Discount specific products or collections of products.",
    type: "amountOffProduct",
  },
  {
    id: 2,
    name: "Amount off order",
    description: "Discount the total order amount.",
    type: "amountOffOrder",
  },
  {
    id: 3,
    name: "Shipping discount",
    description: "Offer free shipping on an order.",
    type: "freeShipping",
  },
];

export default function ChooseDiscount() {
  const router = useRouter();
  return (
    <Stack>
      <Stack
        sx={{
          flexDirection: "row",
          gap: "10px",
          alignItems: "center",
          cursor: "pointer",
          marginBottom: "30px",
        }}
        onClick={() => router.push("/admin/discounts")}
      >
        <FaArrowLeft />
        <Typography
          sx={{
            fontSize: "1.2rem",
          }}
        >
          Back
        </Typography>
      </Stack>
      <Stack
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          borderRadius: "5px",
          border: "1px solid #eee",
          width: "fit-content",
          minWidth: "500px",
          margin: "0 auto",
          overflow: "hidden",
        }}
      >
        {discountOptions.map((el, i) => {
          return (
            <Stack
              key={i}
              sx={{
                cursor: "pointer",
                backgroundColor: "white",
                padding: "10px 20px",
                flexDirection: "row",
                alignItems: "center",

                justifyContent: "space-between",
                "&:hover": {
                  backgroundColor: "#f5f5f5",
                },
              }}
              onClick={() => router.push(`/admin/discounts/add/${el.type}`)}
            >
              <Stack>
                <Typography fontSize={"1.1rem"}>{el.name}</Typography>
                <Typography fontSize={"0.9rem"} color="#888">
                  {el.description}
                </Typography>
              </Stack>
              <Stack>
                <MdKeyboardDoubleArrowRight size={"30px"} color="#888" />
              </Stack>
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
}
