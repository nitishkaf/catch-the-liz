export const randomize = (array: any) => {
  return array.sort(() => Math.random() - 0.5);
};
