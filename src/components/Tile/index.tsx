import { ITile } from "@/types";
import { Box, Flex, Image, Skeleton, Spinner } from "@chakra-ui/react";

const Tile = ({
  url,
  handleImageReady,
  showImages,
  onClick,
  isDuck,
  next,
}: ITile) => {
  return (
    <Flex justify="center" align="center">
      {!showImages && (
        <Box cursor="pointer" onClick={() => next}>
          <Skeleton height="200px" width="200px" />
        </Box>
      )}
      <Image
        width={"200px"}
        height={"200px"}
        onLoad={handleImageReady}
        src={url}
        hidden={!showImages}
        onClick={() => onClick(isDuck)}
        alt="pictures of animals"
        style={{
          objectFit: "cover",
          width: "200px",
          height: "200px",
        }}
      />
    </Flex>
  );
};

export default Tile;
