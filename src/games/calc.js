import getRandomInt from '../getRandomInt.js';
import runGameEngine from '../index.js';

const randomMin = 0;
const randomMax = 50;

const gameRules = 'What is the result of the expression?';

const calc = (operator, firstArgument, secondArgument) => {
  switch (operator) {
    case '-':
      return firstArgument - secondArgument;
    case '*':
      return firstArgument * secondArgument;
    case '+':
      return firstArgument + secondArgument;
    default:
      return null;
  }
};

const getCalcConditions = () => {
  const operators = ['+', '-', '*'];
  const randomOperator = operators[getRandomInt(0, operators.length - 1)];
  const firstArgument = getRandomInt(randomMin, randomMax);
  const secondArgument = getRandomInt(randomMin, randomMax);
  const correctAnswer = calc(randomOperator, firstArgument, secondArgument);
  const question = `${firstArgument} ${randomOperator} ${secondArgument}`;
  return [question, `${correctAnswer}`];
};

export default () => runGameEngine(gameRules, getCalcConditions);
