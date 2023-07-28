import { CAT_URL } from "@/utils/constant";
import { CATType } from "@/types";

export const fetchCats = async () => {
  try {
    const data = await fetch(CAT_URL);
    const result = (await data.json()) as CATType[];
    return result.slice(0, 4).map((c) => c.url);
  } catch (error) {
    throw new Error("Error trying to fetch cats");
  }
};
