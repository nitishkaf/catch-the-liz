import { fetchCats } from "./fetchCats";
import { fetchDogs } from "./fetchDogs";
import { fetchLiz } from "./fetchLiz";
import { randomize } from "@/utils/randomize";

export const fetchData = async () => {
  try {
    const values = await Promise.all([fetchCats(), fetchDogs(), fetchLiz()]);

    const result = values[0]
      .concat(values[1])
      .map((i) => ({ isLiz: false, image: i }));
    result.push({ isLiz: true, image: values[2] });
    return randomize(result);
  } catch (error) {
    throw new Error("failed to fetch data");
  }
};
