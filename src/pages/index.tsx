import { useContext, useState } from "react";

import Buttons from "@/components/Buttons";
import Header from "@/components/Header";
import PlayerModal from "@/components/PlayerModal";
import { useGameContext } from "@/context/ContextProvider";
import Head from "next/head";
import Board from "@/components/Board";
import { Center, Container } from "@chakra-ui/react";
import { AuthContext } from "@/lib/context";
import { signInWithGooglePopup, signOutUser } from "@/lib/firebase";

function SignInButton() {
  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };
  return <Buttons onClick={signInWithGoogle}>Sign in with Google</Buttons>;
}

function SignOutButton() {
  return <Buttons onClick={() => signOutUser()}>Sign Out</Buttons>;
}

export default function Home() {
  //@ts-ignore
  const { startGame, start, setPlayerName } = useGameContext();
  const { user, username } = useContext(AuthContext);
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
          <Center mt={20} gap={4}>
            <Buttons onClick={handleModalOpen}>Play Anonymously</Buttons>
            <SignInButton />
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
