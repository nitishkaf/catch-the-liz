import { CAT_URL, DOG_URL, LIZ_URL } from "@/utils/constant";
import { CATType, DOGType, LizType } from "@/types";
import { randomize } from "@/utils/randomize";

const fetchCats = async () => {
  try {
    const data = await fetch(CAT_URL);
    const result = (await data.json()) as CATType[];
    return result.slice(0, 4).map((c) => c.url);
  } catch (error) {
    throw new Error("Error trying to fetch cats");
  }
};

const fetchLiz = async () => {
  try {
    const data = await fetch(LIZ_URL);
    const result = (await data.json()) as LizType;

    return result.url;
  } catch (error) {
    throw new Error("Error trying to fetch Fox");
  }
};

const fetchDogs = async () => {
  try {
    const data = await fetch(DOG_URL);
    const result = (await data.json()) as DOGType;

    return result.message;
  } catch (error) {
    throw new Error("Error trying to fetch Dog");
  }
};

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
