import getRandomInt from '../utils/random.js';
import runGameEngine from '../index.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const calcGcd = (firstArgument, secondArgument) => {
  const min = Math.min(firstArgument, secondArgument);
  const max = Math.max(firstArgument, secondArgument);
  if (min === 0) {
    return max;
  }
  return calcGcd(max % min, min);
};

const getGcdConditions = () => {
  const firstArgument = getRandomInt();
  const secondArgument = getRandomInt();
  const correctAnswer = calcGcd(firstArgument, secondArgument);
  const question = `${firstArgument} ${secondArgument}`;
  return [question, `${correctAnswer}`];
};

export default () => runGameEngine(gameRules, getGcdConditions);
