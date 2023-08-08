import { NobelPrize, NobelPrizeType } from './types';

export const requestNobelPrizes = async () => {
  const response = await fetch('https://api.nobelprize.org/2.1/nobelPrizes');
  const data = await response.json();
  const nobelPrizes: NobelPrizeType[] = data.nobelPrizes.map((prize: NobelPrize) => ({
    category: prize.categoryFullName.en,
    date: prize.dateAwarded,
    knownName: prize.laureates[0].knownName?.en ?? prize.laureates[0].orgName?.en,
    motivation: prize.laureates[0].motivation.en,
  }));
  return nobelPrizes;
};
