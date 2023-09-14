export const randomNumbers = (min: number, max: number) => {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
};

export const actionDelay = async (ms: number) => {
  await new Promise((resolve) => setTimeout(resolve, ms));
}