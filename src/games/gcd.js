import getRandomInt from '../getRandomInt.js';
import runGameEngine from '../index.js';

const randomMin = 0;
const randomMax = 100;

const gameRules = 'Find the greatest common divisor of given numbers.';

const calcGcd = (int1, int2) => {
  if (int1 === 0) {
    return int2;
  }
  return calcGcd(int2 % int1, int1);
};

const getGcdConditions = () => {
  const num1 = getRandomInt(randomMin, randomMax);
  const num2 = getRandomInt(randomMin, randomMax);
  const correctAnswer = calcGcd(num1, num2);
  const question = `${num1} ${num2}`;
  return [question, `${correctAnswer}`];
};

export default createGame(gameRule, generateGameCondition);
