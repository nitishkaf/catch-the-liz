import { Spinner } from "@chakra-ui/react";

const Loader = () => {
  return (
    <Spinner
      size={"xl"}
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="white.500"
    />
  );
};

export default Loader;
