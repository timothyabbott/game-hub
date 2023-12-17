import meh from "../assets/meh-o.svg";
import smile from "../assets/slightly-smiling-face.svg";
import sad from "../assets/slightly-frowning-face.svg";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: sad, alt: "Bad", boxSize: "25px" },
    4: { src: meh, alt: "Ok", boxSize: "25px" },
    5: { src: smile, alt: "Good", boxSize: "25px" },
  };
  return <Image {...emojiMap[rating]} boxSize="25px" marginTop={1} />;
};

export default Emoji;
