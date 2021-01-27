import getRandomInt from '../utils/random.js';
import runGameEngine from '../index.js';

const isEven = (number) => number % 2 === 0;

const getCorrectAnswer = (number) => (isEven(number) ? 'yes' : 'no');

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const getEvenConditions = () => {
  const numberForRound = getRandomInt();
  const correctAnswer = getCorrectAnswer(numberForRound);
  return [numberForRound, correctAnswer];
};

export default () => runGameEngine(gameRules, getEvenConditions);
