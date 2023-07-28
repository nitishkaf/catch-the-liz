import { createContext, useContext, useState } from "react";
import { useRouter } from "next/router";
import { TLeaderboardItem } from "@/types";

const Context = createContext({});

const ContextProvider = ({ children }: any) => {
  const router = useRouter();
  const [player, setPlayer] = useState("");
  const [score, setScore] = useState(0);
  const [start, setStart] = useState(false);
  const [leaderboard, setLeaderboard] = useState<TLeaderboardItem[]>([]);

  const scoreHandler = (hit: any) => {
    if (hit) {
      setScore(score + 1);
    } else {
      setScore(score - 1);
    }
  };

  const startHandler = () => {
    setStart(true);
  };

  const endHandler = () => {
    setStart(false);
    setLeaderboard((prev) => {
      return [...prev, { date: new Date(), name: player, score: score }].sort(
        (a, b) => b.score - a.score
      );
    });
    router.push("/leaderboard");
  };

  const resetHandler = () => {
    router.push("/");
    setPlayer("");
    setScore(0);
  };

  const playAgainHandler = () => {
    router.push("/");
    setScore(0);
  };

  const value = {
    player,
    setPlayer,
    score,
    scoreHandler,
    start,
    startHandler,
    endHandler,
    resetHandler,
    playAgainHandler,
    leaderboard,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
export default ContextProvider;
export const useGameContext = () => useContext(Context);
