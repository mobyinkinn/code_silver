import { Stack, Typography } from "@mui/material";
import dukaan from "./assets/dukaan.png";

export default function Rooted() {
  return (
    <Stack backgroundColor="#ededed" direction="row" marginTop="10px">
      <Stack
        width="50%"
        height={"90vh"}
        sx={{
          backgroundImage: `url(${dukaan.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          alignItems: "center",
        }}
      ></Stack>
      <Stack width="50%" gap={"10px"} padding="40px 60px">
        <Typography fontSize="2rem">
          ROOTED IN INDIA, INSPIRED BY THE TIMELESS ELEGANCE OF SILVER
        </Typography>
        <Typography fontSize="0.8rem">
          AT CODE SILVER, WE CELEBRATE SILVER AS MORE THAN A METAL; IT'S A
          HERITAGE, A SYMBOL OF PURITY, AND AN ENDUR- ING THREAD IN INDIA'S
          CULTURAL TAPESTRY, FOUNDED IN 2010 BY SHIKHA DURLABHJI, A VISIONARY
          WITH A DEEP PASSION FOR CRAFTSMANSHIP AND DESIGN, CODE SILVER WAS BORN
          TO REIMAGINE SILVER FOR THE MODERN WORLD WHILE HON- ORING ITS TIMELESS
          ESSENCE.
        </Typography>
        <Typography fontSize="0.8rem">
          WE'RE A BRAND THAT VALUES ARTISTRY AS MUCH AS CRAFTSMANSHIP, AND THAT
          BELIEVES EVERY PIECE TELLS A STORY OF ITS OWN. THESE STORIES AREN'T
          JUST ABOUT SILVER BUT ABOUT THE PEOPLE WHO SHAPE IT, THE INSPIRATION
          THAT GUIDES IT, AND THE TIMELESS ELEGANCE IT BRINGS TO LIFE'S MOMENTS.
        </Typography>
        <Typography fontSize="0.8rem">
          FROM THE VERY BEGINNING, SHIKHA'S VISION WAS TO BRIDGE INDIA'S RICH
          HERITAGE WITH CONTEMPORARY AESTHETICS. HER KEEN EYE FOR DESIGN AND
          RESPECT FOR TRADITIONAL ARTISTRY HAVE HELPED CREATE A BRAND THAT
          RESONATES WITH MODERN CONNOISSEURS WHO SEEK AUTHENTICITY, INNOVATION,
          AND INDIVIDUALITY.
        </Typography>
        <Typography fontSize="0.8rem">
          OUR CREATIONS ARE AN ODE TO INDIA'S LEGACY, REIMAGINED FOR TODAY. FROM
          INTRICATE MOTIFS INSPIRED BY TRADI- TION TO BOLD, WILDLIFE-THEMED
          DESIGNS IN THE CODE SILVER WILD COLLECTION, WE BRING TO LIFE A MODERN
          EXPRES- SION OF SILVER. AT THE HEART OF CODE SILVER LIES A COMMITMENT
          TO BRIDGING THE PAST AND THE PRESENT, HONORING CRAFTSMANSHIP WHILE
          EMBRACING FRESH PERSPECTIVES.
        </Typography>
        <Typography fontSize="0.8rem">
          EVERY DESIGN IS A JOURNEY-A REFLECTION OF EXPLORATION, ARTISTRY, AND
          CONNECTION. WHETHER IT'S BESPOKE HEIRLOOMS OR COST-EFFECTIVE
          SILVER-PLATING OPTIONS, OUR COLLECTIONS CELEBRATE INDIVIDUALITY AND
          THE ENDURING BEAUTY OF SILVER.
        </Typography>
      </Stack>
    </Stack>
  );
}
