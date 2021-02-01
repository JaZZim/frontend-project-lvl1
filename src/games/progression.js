import getRandomInt from '../getRandomInt.js';
import createGame from '../index.js';

const gameRule = 'What number is missing in the progression?';

const minLengthProcession = 7;
const maxLengthProcession = 11;
const minStepProcession = 3;
const maxStepProcession = 7;
const minFirstItemProcession = 1;
const maxFirstItemProcession = 50;

const getProgression = (lengthProgression, stepProgression, firstItem) => {
  const progression = [];
  for (let i = 0; i < lengthProgression; i += 1) {
    const item = firstItem + (i * stepProgression);
    progression.push(item);
  }
  return progression;
};

const generateGameCondition = () => {
  const randomLength = getRandomInt(minLengthProcession, maxLengthProcession);
  const randomIndex = getRandomInt(0, randomLength - 1);
  const stepProgression = getRandomInt(minStepProcession, maxStepProcession);
  const firstItemProgression = getRandomInt(minFirstItemProcession, maxFirstItemProcession);

  const progression = getProgression(randomLength, stepProgression, firstItemProgression);
  const correctAnswer = progression[randomIndex];
  progression[randomIndex] = '..';
  const question = progression.join(' ');
  return [question, `${correctAnswer}`];
};

export default createGame(gameRule, generateGameCondition);
