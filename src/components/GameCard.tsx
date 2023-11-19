import React from "react";
import { Game } from "../Hooks/useGames";
import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <PlatformIconList
          // we need to do this strange platform mapping because parent_platforms
          // has a list of platforms which in turn has a platform property which is a list of platforms

          platforms={game.parent_platforms.map(
            (platforms) => platforms.platform
          )}
        ></PlatformIconList>
      </CardBody>
    </Card>
  );
};

export default GameCard;
