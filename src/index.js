import readlineSync from 'readline-sync';
import sayHelloAndGetUserName from './cli.js';

const askQuestion = (question) => console.log(`Question: ${question}`);

const getAnswer = () => readlineSync.question('Your answer: ');

const isCorrectAnswer = (correctAnswer, answer) => correctAnswer === answer;

const runGameEngine = (gameRules, getGameConditions) => {
  const playerName = sayHelloAndGetUserName();
  const countOfRoundsGame = 3;
  console.log(gameRules);
  for (let round = 1; round <= countOfRoundsGame; round += 1) {
    const [question, correctAnswer] = getGameConditions();
    askQuestion(question);
    const playerAnswer = getAnswer();
    if (isCorrectAnswer(correctAnswer, playerAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${playerName}!`);
};

export default runGameEngine;
