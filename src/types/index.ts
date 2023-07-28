import { HeadingProps } from "@chakra-ui/react";
import { ReactNode } from "react";

export type CATType = {
  id: string;
  url: string;
  width: number;
  height: number;
};

export type DUCKType = {
  message: string;
  url: string;
};

export type DOGType = {
  message: string[];
  status: string;
};

export type TileType = {
  image: string;
  isDuck: boolean;
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
