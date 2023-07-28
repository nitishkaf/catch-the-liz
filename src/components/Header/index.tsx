import { Flex, Text, Heading } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex as="main" direction="column" align="center" justify="center" mt={10}>
      <Heading>Catch The Duck</Heading>
      <Text>A classic DUCK HUNT inspired web game!</Text>
    </Flex>
  );
};

export default Header;
