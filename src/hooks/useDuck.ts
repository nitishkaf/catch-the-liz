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
        setDuckImage(result.url); // Corrected to use result.url
      } catch (error) {
        throw new Error("Error trying to fetch duck");
      }
    };
    fetchDuck();
  }, []);

  return duckImage;
};
