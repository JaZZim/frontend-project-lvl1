import getRandomInt from '../getRandomInt.js';
import runGameEngine from '../index.js';

const randomMin = 0;
const randomMax = 100;

const isEven = (number) => number % 2 === 0;

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const getEvenConditions = () => {
  const randomNumber = getRandomInt(randomMin, randomMax);
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, correctAnswer];
};

export default () => runGameEngine(gameRules, getEvenConditions);
