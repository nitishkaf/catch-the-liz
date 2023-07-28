import { useState, useEffect } from "react";
import { useGameContext } from "@/context/ContextProvider";
import { useImages } from "@/hooks";
import { Container, Flex, Grid, Heading } from "@chakra-ui/react";
import { Countdown } from "../CountDown";
import Tile from "../Tile";

interface IBoard {}

const Board: React.FC<IBoard> = () => {
  // @ts-ignore
  const { score, scoreUp, scoreDown, Over } = useGameContext();
  const { currentSet, next } = useImages();
  const [imageCount, setImageCount] = useState(0);
  const [timer, setTimer] = useState(25);

  const showImages = imageCount === 9;

  const handleImageReady = () => {
    setImageCount((prev) => {
      if (prev === 9) return prev;
      return prev + 1;
    });
  };

  const onNext = () => {
    next();
    setImageCount(0);
  };

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimer((prev) => {
        if (prev === 0) return 0;
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  useEffect(() => {
    timer === 0 && Over();
  }, [timer]);

  const handleImageHit = (isLiz: boolean) => {
    if (isLiz) {
      scoreUp();
    } else {
      scoreDown();
    }
    onNext();
  };

  return (
    <Container>
      <Flex width="100%" justifyContent={"space-between"} marginBottom={8}>
        <Heading>Score: {score}</Heading>
        <Countdown timeInSeconds={timer} />
      </Flex>
      <Grid
        templateRows="repeat(3, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap={4}
      >
        {currentSet.map((url, index) => (
          <Tile
            key={index}
            url={url.image}
            handleImageReady={handleImageReady}
            showImages={showImages}
            onClick={handleImageHit}
            isLiz={url.isLiz}
            next={onNext}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default Board;
