'use strict';
const againButton = document.querySelector('.again');
const guessInput  = document.querySelector('.guess');
const inputField = document.querySelector('.check');
const randomNumberPlaceHolder = document.querySelector('.number');
const message = document.querySelector('.message');

let winningNumber = getRandomNumber();
// Handlers
const guessedNumberHandler = () => {
  const guessedNumber = Number(document.querySelector('.guess').value);
  console.log('winningnumber', winningNumber);
  console.log('quessed', guessedNumber);
  if (!guessedNumber) message.textContent = 'Select a number!';
  else if (winningNumber === guessedNumber) {
    console.log(true);
    message.textContent = '🎉 Correct Number!';
    randomNumberPlaceHolder.textContent = winningNumber;
  } else {
    console.log(false);
    if ( guessedNumber > winningNumber ) message.textContent = 'Too Big!';
    if ( guessedNumber < winningNumber ) message.textContent = 'Too Small!';
    
  }
};

const resetGameHandler = () => {
  winningNumber = getRandomNumber();
  message.textContent = 'Start guessing again...';
  randomNumberPlaceHolder.textContent = '?';
  guessInput.value = '';
};

inputField.addEventListener('click', guessedNumberHandler);

againButton.addEventListener('click', resetGameHandler);

// Helper function
function getRandomNumber() {
  return Math.floor(Math.random() * 20 + 1);
}
