import getRandomInt from '../utils/random.js';
import runGameEngine from '../index.js';

const gameRules = 'What number is missing in the progression?';

const minLengthProcession = 7;
const maxLengthProcession = 11;
const minStepProcession = 3;
const maxStepProcession = 7;
const minFirstItemProcession = 1;
const maxFirstItemProcession = 50;

const getProgressionAndAnswer = (lengthProgression, stepProgression, randomPosition, firstItem) => {
  const progression = [];
  let answer;
  for (let i = 0; i < lengthProgression; i += 1) {
    const item = firstItem + (i * stepProgression);
    if (i === randomPosition) {
      answer = item;
      progression.push('..');
    } else {
      progression.push(item);
    }
  }
  return [progression.join(' '), answer];
};

const getProgressionConditions = () => {
  const randomLength = getRandomInt(minLengthProcession, maxLengthProcession);
  const randomIndex = getRandomInt(0, randomLength - 1);
  const stepProgression = getRandomInt(minStepProcession, maxStepProcession);
  const firstItemProgression = getRandomInt(minFirstItemProcession, maxFirstItemProcession);
  const [question, correctAnswer] = getProgressionAndAnswer(
    randomLength,
    stepProgression,
    randomIndex,
    firstItemProgression,
  );
  return [question, `${correctAnswer}`];
};

export default () => runGameEngine(gameRules, getProgressionConditions);
