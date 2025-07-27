'use strict';
const randomNumberPlaceHolder = document.querySelector('.number');
const againButton = document.querySelector('.again');
const guessInput = document.querySelector('.guess');
const inputField = document.querySelector('.check');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const highScore = document.querySelector('.highscore');

let winningNumber = getRandomNumber();
let scoreValue = Number(document.querySelector('.score').textContent);
let highScoreValue = Number(document.querySelector('.highscore').textContent);
// Handlers
const guessedNumberHandler = () => {
  const guessedNumber = Number(document.querySelector('.guess').value);
  console.log('winningnumber', winningNumber);
  //   console.log('quessed', guessedNumber);
  if (!guessedNumber) message.textContent = '⚠️ Select a number!';
  else if (winningNumber === guessedNumber) {
    console.log(true);
    message.textContent = '🎉 Correct Number!';
    randomNumberPlaceHolder.textContent = winningNumber;
    highScore.textContent = score.textContent;
  } else {
    if (guessedNumber > winningNumber) message.textContent = '📈 Too Big!';
    if (guessedNumber < winningNumber) message.textContent = '📉 Too Small!';
    scoreValue -= 1;
    score.textContent = scoreValue;
    console.log('scoreValue', scoreValue);
    console.log('highScoreValue', highScoreValue);
  }
};

const resetGameHandler = () => {
  winningNumber = getRandomNumber();
  message.textContent = 'Start guessing again...';
  randomNumberPlaceHolder.textContent = '?';
  guessInput.value = '';
  score.textContent = 20;
  scoreValue = 20;
};

inputField.addEventListener('click', guessedNumberHandler);

againButton.addEventListener('click', resetGameHandler);

// Helper function
function getRandomNumber() {
  return Math.floor(Math.random() * 20 + 1);
}
