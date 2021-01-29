import getRandomInt from '../getRandomInt.js';
import runGameEngine from '../index.js';

const randomMin = 0;
const randomMax = 100;

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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

const getPrimeConditions = () => {
  const randomNumber = getRandomInt(randomMin, randomMax);
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  return [randomNumber, `${correctAnswer}`];
};

export default () => runGameEngine(gameRules, getPrimeConditions);
