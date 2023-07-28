import { useEffect, useState } from "react";
import axios from "axios";
import { DUCKType } from "@/types";
import { DUCK_URL } from "@/utils/constant";

export const useDuck = (): string => {
  const [duckImage, setDuckImage] = useState<string>("");

  useEffect(() => {
    const fetchDuck = async () => {
      try {
        const response = await axios.get<DUCKType>(DUCK_URL);
        const result = response.data;
        if (Array.isArray(result) && result.length > 0) {
          setDuckImage(result[0]);
        } else {
          console.error("Empty or invalid response from the API.");
        }
      } catch (error) {
        console.error("Error trying to fetch shiba inu", error);
      }
    };
    fetchDuck();
  }, []);

  return duckImage;
};
