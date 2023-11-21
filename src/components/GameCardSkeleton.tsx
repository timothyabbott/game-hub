import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

const GameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton
        height="250"
        width="350"
        borderRadius={10}
        overflow={"hidden"}
      ></Skeleton>
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
