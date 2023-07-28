import { TileType } from "@/types";

export const randomize = (array: TileType[]) => {
  return array.sort(() => Math.random() - 0.5);
};
