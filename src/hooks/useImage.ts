import { useEffect, useState, useCallback } from "react";
import { randomize } from "@/utils/randomize";
import { TileType } from "@/types";
import { useCats, useDuck, useDogs } from ".";

export const useImages = (): {
  currentSet: TileType[];
  next: () => void;
} => {
  const [currentSet, setCurrentSet] = useState<TileType[]>([]);
  const [nextSet, setNextSet] = useState<TileType[]>([]);

  const cats = useCats();
  const duckUrl = useDuck();
  const dogs = useDogs();

  const fetchData = useCallback(async () => {
    try {
      const values = await Promise.all([cats, dogs, duckUrl]);

      const result = values[0]
        .concat(values[1])
        .map((image) => ({ isDuck: false, image }));

      if (duckUrl) {
        result.push({ isDuck: true, image: duckUrl });
      }

      setCurrentSet(randomize(result));
      setNextSet(result);
    } catch (error) {
      throw new Error("Failed to fetch data");
    }
  }, [cats, dogs, duckUrl]); // Include cats, dogs, and duckUrl in the dependency array of useCallback

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const fetchNextSet = useCallback(async () => {
    try {
      const values = await Promise.all([cats, dogs, duckUrl]);

      const result = values[0]
        .concat(values[1])
        .map((image) => ({ isDuck: false, image }));

      if (duckUrl) {
        result.push({ isDuck: true, image: duckUrl });
      }

      setNextSet(result);
    } catch (error) {
      throw new Error("Failed to fetch data for the next set");
    }
  }, [cats, dogs, duckUrl]);

  const next = useCallback(() => {
    setCurrentSet(randomize(nextSet));
    fetchNextSet();
  }, [nextSet, fetchNextSet]);

  return {
    currentSet,
    next,
  };
};
