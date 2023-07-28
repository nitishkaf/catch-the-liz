import { useState } from "react";

import Buttons from "@/components/Buttons";
import Header from "@/components/Header";
import PlayerModal from "@/components/PlayerModal";
import { useGameContext } from "@/context/ContextProvider";
import Head from "next/head";

export default function Home() {
  //@ts-ignore
  const { start, startHandler, setPlayer } = useGameContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleStartGame = (playerName: string) => {
    setPlayer(playerName);
    startHandler();
    handleModalClose();
  };

  return (
    <>
      <Head>
        <title>Catch The Duck</title>
      </Head>
      <Header />
      {start ? <div> started </div> : <div> Not started </div>}
      <Buttons onClick={handleModalOpen}>Play</Buttons>
      <PlayerModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onStartGame={handleStartGame}
      />
    </>
  );
}
