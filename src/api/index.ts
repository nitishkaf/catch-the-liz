import { useState, useEffect } from "react";
import { randomize } from "@/utils/randomize";
import { TileType } from "@/types";
import { useCats, useDuck, useDogs } from "@/hooks";

export const useData = (): TileType[] => {
  const [data, setData] = useState<TileType[]>([]);
  const cats = useCats();
  const duckUrl = useDuck();
  const dogs = useDogs();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const values = await Promise.all([cats, dogs, duckUrl]);

        const result = values[0]
          .concat(values[1])
          .map((image) => ({ isDuck: false, image })); // get dogs and cats as non-ducks

        if (duckUrl) {
          // Check if duckUrl is not empty before adding the duck value to the array
          result.push({ isDuck: true, image: duckUrl });
        }

        setData(randomize(result));
      } catch (error) {
        throw new Error("Failed to fetch data");
      }
    };

    fetchData();
  }, [cats, dogs, duckUrl]);

  return data;
};
