import { useEffect, useState, useCallback } from "react";
import { randomize } from "@/utils/randomize";
import { TileType } from "@/types";
import { fetchData } from "@/api";

export const useImages = (): {
  currentSet: TileType[];
  next: () => void;
} => {
  const [currentSet, setCurrentSet] = useState<TileType[]>([]);
  const [nextSet, setNextSet] = useState<TileType[]>([]);

  const fetchDataFromAPI = useCallback(async () => {
    try {
      const firstSet = await fetchData();
      const secondSet = await fetchData();

      secondSet.forEach((img) => {
        const i = new Image();
        i.src = img.image;
      });
      setCurrentSet(randomize(firstSet));
      setNextSet(secondSet);
    } catch (error) {
      throw new Error("Failed to fetch data");
    }
  }, []);

  useEffect(() => {
    fetchDataFromAPI();
  }, [fetchDataFromAPI]);

  const next = useCallback(() => {
    setCurrentSet(randomize(nextSet));
    fetchDataFromAPI();
  }, [nextSet, fetchDataFromAPI]);

  return {
    currentSet,
    next,
  };
};
