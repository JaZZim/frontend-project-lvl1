import getRandomInt from '../getRandomInt.js';
import createGame from '../index.js';

const randomMin = 0;
const randomMax = 100;

const isEven = (number) => number % 2 === 0;

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateGameCondition = () => {
  const question = getRandomInt(randomMin, randomMax);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default createGame(gameRule, generateGameCondition);
