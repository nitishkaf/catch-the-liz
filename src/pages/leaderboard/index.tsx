import Buttons from "@/components/Buttons";
import Header from "@/components/Header";
import { Leaderboards } from "@/components/Leaderboard";
import { Center } from "@chakra-ui/react";
import { useRouter } from "next/router";
const Leaderboard = () => {
  const router = useRouter();
  return (
    <div>
      <Header />
      <Leaderboards />
      <Center mt={20}>
        <Buttons onClick={() => router.push("/")}>Play Again</Buttons>
      </Center>
    </div>
  );
};

export default Leaderboard;
