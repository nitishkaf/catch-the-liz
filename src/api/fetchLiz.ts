import { LIZ_URL } from "@/utils/constant";
import { LizType } from "@/types";

export const fetchLiz = async () => {
  try {
    const data = await fetch(LIZ_URL);
    const result = (await data.json()) as LizType;

    return result.url;
  } catch (error) {
    throw new Error("Error trying to fetch Fox");
  }
};
