import { useEffect, useState } from "react";
import axios from "axios";
import { DOGType } from "@/types";
import { DOG_URL } from "@/utils/constant";

export const useDogs = (): string[] => {
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
