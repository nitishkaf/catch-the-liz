import { Center, Flex, Heading, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex as="main" direction="column" align="center" justify="center">
      <Heading>Catch The Duck</Heading>
      <Text>A classic DUCK HUNT inspired web game!</Text>
    </Flex>
  );
}
