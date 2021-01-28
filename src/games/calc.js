import getRandomInt from '../utils/random.js';
import runGameEngine from '../index.js';

const gameRules = 'What is the result of the expression?';

const calc = (operator, firstArgument, secondArgument) => {
  switch (operator) {
    case '-':
      return firstArgument - secondArgument;
    case '*':
      return firstArgument * secondArgument;
    default:
      return firstArgument + secondArgument;
  }
};

const getCalcConditions = () => {
  const operators = ['+', '-', '*'];
  const randomOperator = operators[getRandomInt(0, operators.length - 1)];
  const firstArgument = getRandomInt();
  const secondArgument = getRandomInt();
  const correctAnswer = calc(randomOperator, firstArgument, secondArgument);
  const question = `${firstArgument} ${randomOperator} ${secondArgument}`;
  return [question, `${correctAnswer}`];
};

export default () => runGameEngine(gameRules, getCalcConditions);
