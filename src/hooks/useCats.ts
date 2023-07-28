import { useEffect, useState } from "react";
import axios from "axios";
import { CATType } from "@/types";
import { CAT_URL } from "@/utils/constant";

export const useCats = (): string[] => {
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
