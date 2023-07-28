import { ReactNode } from "react";
import { Button, Container, Link, Heading, Flex } from "@chakra-ui/react";
import { NextRouter, useRouter } from "next/router";

export const ErrorPage = ({
  title,
  children,
}: {
  children?: ReactNode;
  title: string;
}) => {
  const router: NextRouter = useRouter();
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      height="80vh"
    >
      <Container
        justifyContent="center"
        flexDirection="column"
        gap={4}
        display="flex"
        height="100%"
        marginBottom={"2rem"}
      >
        <Heading as="h1" color="white" textAlign="center" marginBlockStart={0}>
          {title}
        </Heading>

        {children ? (
          children
        ) : (
          <Button
            as={Link}
            mt={2}
            onClick={() => router.push("/")}
            size="md"
            variant="solid"
          >
            Go to Home
          </Button>
        )}
      </Container>
    </Flex>
  );
};
