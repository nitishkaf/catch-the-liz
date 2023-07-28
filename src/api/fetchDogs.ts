import { DOG_URL } from "@/utils/constant";
import { DOGType } from "@/types";

export const fetchDogs = async () => {
  try {
    const data = await fetch(DOG_URL);
    const result = (await data.json()) as DOGType;

    return result.message;
  } catch (error) {
    throw new Error("Error trying to fetch Dog");
  }
};
