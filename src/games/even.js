import readlineSync from 'readline-sync';
import getRandomInt from '../utils/random.js';

const isEven = (number) => number % 2 === 0;

const printGameRules = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');

const askQuestion = (number) => console.log(`Question: ${number}`);

const getAnswer = () => readlineSync.question('Your answer: ');

const getCorrectAnswer = (number) => (isEven(number) ? 'yes' : 'no');

const isCorrectAnswer = (correctAnswer, answer) => correctAnswer === answer;

const startGame = (playerName) => {
  const countOfRoundsGame = 3;
  const round = (resultGame, roundCount) => {
    if (!resultGame || roundCount < 1) {
      return resultGame;
    }
    const numberForRound = getRandomInt();
    const correctAnswer = getCorrectAnswer(numberForRound);
    askQuestion(numberForRound);
    const playerAnswer = getAnswer();
    const roundResult = isCorrectAnswer(correctAnswer, playerAnswer);
    if (roundResult) {
      console.log('Correct!');
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    }
    return round(roundResult, roundCount - 1);
  };

  const resultGame = round(true, countOfRoundsGame);

  if (resultGame) {
    console.log(`Congratulations, ${playerName}!`);
  } else {
    console.log(`Let's try again, ${playerName}!`);
  }
};

const brainEvenGame = (playerName) => {
  printGameRules();
  startGame(playerName);
};

export default brainEvenGame;
