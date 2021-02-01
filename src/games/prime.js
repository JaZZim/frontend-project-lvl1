import getRandomInt from '../getRandomInt.js';
import createGame from '../index.js';

const randomMin = 0;
const randomMax = 100;

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const generateGameCondition = () => {
  const randomNumber = getRandomInt(randomMin, randomMax);
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  return [randomNumber, `${correctAnswer}`];
};

export default createGame(gameRule, generateGameCondition);
