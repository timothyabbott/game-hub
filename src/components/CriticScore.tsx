import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  // paddingX here means 1 unit of chakra padding. default is 4px
  let colour = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge
      fontSize="14px"
      colorScheme={colour}
      borderRadius={"4px"}
      paddingX={2}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
