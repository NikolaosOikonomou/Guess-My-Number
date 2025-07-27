'use strict';
const inputField = document.querySelector('.check');
const againButton = document.querySelector('.again');

let winningNumber = getRandomNumber();
let randomNumberPlaceHolder = document.querySelector('.number');
let message = document.querySelector('.message');

// Handlers
const guessedNumberHandler = () => {
  let quessedNumber = Number(document.querySelector('.guess').value);
  console.log('winningnumber', winningNumber);
  console.log('quessed', quessedNumber);
  if (winningNumber === quessedNumber) {
    console.log(true);
    message.textContent = '🎉 Correct Number!';
    randomNumberPlaceHolder.textContent = winningNumber;
  } else {
    console.log(false);
    if ( quessedNumber > winningNumber ) message.textContent = 'Too Big!';
    if ( quessedNumber < winningNumber ) message.textContent = 'Too Small!';
    
  }
};

const resetGameHandler = () => {
  winningNumber = getRandomNumber();
  message.textContent = 'Start guessing again...';
  randomNumberPlaceHolder.textContent = '?';
};

inputField.addEventListener('click', guessedNumberHandler);

againButton.addEventListener('click', resetGameHandler);

// Helper function
function getRandomNumber() {
  return Math.floor(Math.random() * 20 + 1);
}
