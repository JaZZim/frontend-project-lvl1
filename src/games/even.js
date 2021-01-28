import getRandomInt from '../utils/random.js';
import runGameEngine from '../index.js';

const isEven = (number) => number % 2 === 0;

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const getEvenConditions = () => {
  const randomNumber = getRandomInt();
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, correctAnswer];
};

export default () => runGameEngine(gameRules, getEvenConditions);
