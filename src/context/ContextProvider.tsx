import { createContext, useContext, useState } from "react";
import { useRouter } from "next/router";
import {
  ContextProps,
  IControllerContextType,
  TLeaderboardItem,
} from "@/types";
import { database, ref, push } from "@/lib/firebase";
import { v4 as uuidv4 } from "uuid";

const Context = createContext<IControllerContextType | null>(null);

const ContextProvider: React.FC<ContextProps> = ({ children }) => {
  const router = useRouter();
  const [playerName, setPlayerName] = useState("");
  const [leaderboard, setLeaderboard] = useState<TLeaderboardItem[]>([]);
  const [startGame, setStartGame] = useState(false);
  const [score, setScore] = useState(0);

  const scoreUp = () => {
    setScore((prev) => prev + 1);
  };

  const scoreDown = () => {
    setScore((prev) => prev - 1);
  };

  const start = () => {
    setStartGame(true);
  };

  const savePlayerData = (name, score) => {
    try {
      const playerId = uuidv4();
      const playersRef = ref(database, "players");
      push(playersRef, {
        id: playerId,
        name: name,
        score: score,
      });
    } catch (error) {
      console.log("Error saving data: ", error);
    }
  };

  const Over = () => {
    setStartGame(false);
    savePlayerData(playerName, score);
    setLeaderboard((prev) => {
      return [
        ...prev,
        { date: new Date(), name: playerName, score: score },
      ].sort((a, b) => b.score - a.score);
    });
    router.push("/leaderboard");
  };

  const newPlayer = () => {
    router.push("/");
    setPlayerName("");
    setScore(0);
  };

  const playAgain = () => {
    router.push("/");
    setScore(0);
  };

  const value = {
    playerName,
    startGame,
    score,
    leaderboard,
    setPlayerName,
    start,
    Over,
    scoreUp,
    scoreDown,
    newPlayer,
    playAgain,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
export default ContextProvider;
export const useGameContext = () => useContext(Context);
