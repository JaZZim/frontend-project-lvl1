import getRandomInt from '../utils/random.js';
import runGameEngine from '../index.js';

const gameRules = 'What number is missing in the progression?';

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
  const randomLength = getRandomInt(7, 11);
  const randomIndex = getRandomInt(0, randomLength - 1);
  const stepProgression = getRandomInt(3, 6);
  const firstItemProgression = getRandomInt(1, 50);
  const [question, correctAnswer] = getProgressionAndAnswer(
    randomLength,
    stepProgression,
    randomIndex,
    firstItemProgression,
  );
  return [question, `${correctAnswer}`];
};

export default () => runGameEngine(gameRules, getProgressionConditions);
