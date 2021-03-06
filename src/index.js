import readlineSync from 'readline-sync';

const createGame = (gameRule, getGameCondition) => () => {
  const countOfRoundsGame = 3;

  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log(gameRule);

  for (let round = 1; round <= countOfRoundsGame; round += 1) {
    const [question, correctAnswer] = getGameCondition();
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer !== playerAnswer) {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${playerName}!`);
};

export default createGame;
