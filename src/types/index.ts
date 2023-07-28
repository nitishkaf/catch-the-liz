import { HeadingProps } from "@chakra-ui/react";
import { ReactNode } from "react";

export type CATType = {
  id: string;
  url: string;
  width: number;
  height: number;
};

export type LizType = {
  message: string;
  url: string;
};

export type DOGType = {
  message: string[];
  status: string;
};

export type TileType = {
  image: string;
  isLiz: boolean;
};

export type TTimeBlock = {
  number?: number;
  numberProps?: HeadingProps;
  textSize?: "xs" | "sm" | "md" | "lg";
  unit?: string;
};

export type TLeaderboardItem = {
  date: Date;
  name: string;
  score: number;
};

export type TPlayerModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onStartGame: (playerName: string) => void;
};

export type ITile = {
  url: string;
  handleImageReady: () => void;
  onClick: (isLiz: boolean) => void;
  isLiz: boolean;
  showImages: boolean;
  next: () => void;
};

export type IControllerContextType = {
  playerName: string;
  startGame: boolean;
  score: number;
  leaderboard: TLeaderboardItem[];
  setPlayerName: (arg: string) => void;
  start: () => void;
  Over: () => void;
  scoreUp: () => void;
  scoreDown: () => void;
  newPlayer: () => void;
  playAgain: () => void;
};

export type ContextProps = {
  children?: ReactNode | undefined;
};
