import { useState, useEffect } from "react";
import axios from "axios";
import { randomize } from "@/utils/randomize";
import { CATType, DOGType, DUCKType, TileType } from "@/types";
import { CAT_URL, DOG_URL, DUCK_URL } from "@/utils/constant";

const useCats = (): string[] => {
  const [catUrls, setCatUrls] = useState<string[]>([]);

  useEffect(() => {
    const fetchCats = async () => {
      try {
        const response = await axios.get<CATType[]>(CAT_URL);
        const result = response.data;
        const catUrls = result.slice(0, 4).map((cat) => cat.url);
        setCatUrls(catUrls);
      } catch (error) {
        throw new Error("Error trying to fetch cats");
      }
    };

    fetchCats();
  }, []);

  return catUrls;
};

const useDuck = (): string => {
  const [duckImage, setDuckImage] = useState<string>("");

  useEffect(() => {
    const fetchDuck = async () => {
      try {
        const response = await axios.get<DUCKType>(DUCK_URL);
        const result = response.data;
        setDuckImage(result.url); // Corrected to use result.url
      } catch (error) {
        throw new Error("Error trying to fetch duck");
      }
    };
    fetchDuck();
  }, []);

  return duckImage;
};
const useDogs = (): string[] => {
  const [dogUrls, setDogUrls] = useState<string[]>([]);

  useEffect(() => {
    const fetchDogs = async () => {
      try {
        const response = await axios.get<DOGType>(DOG_URL);
        const result = response.data;
        setDogUrls(result.message);
      } catch (error) {
        throw new Error("Error trying to fetch dogs");
      }
    };
    fetchDogs();
  }, []);

  return dogUrls;
};

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
