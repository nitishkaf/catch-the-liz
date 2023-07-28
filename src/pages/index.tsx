import { useState } from "react";

import Buttons from "@/components/Buttons";
import Header from "@/components/Header";
import PlayerModal from "@/components/PlayerModal";
import { useGameContext } from "@/context/ContextProvider";
import Head from "next/head";
import Board from "@/components/Board";
import { Center, Container } from "@chakra-ui/react";

export default function Home() {
  //@ts-ignore
  const { startGame, start, setPlayerName } = useGameContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleStartGame = (playerName: string) => {
    setPlayerName(playerName);
    start();
    handleModalClose();
  };

  return (
    <>
      <Head>
        <title>Catch The Liz</title>
      </Head>
      <Container
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Header />
        {startGame ? (
          <Board />
        ) : (
          <Center mt={20}>
            <Buttons onClick={handleModalOpen}>Play</Buttons>
            <PlayerModal
              isOpen={isModalOpen}
              onClose={handleModalClose}
              onStartGame={handleStartGame}
            />
          </Center>
        )}
      </Container>
    </>
  );
}
