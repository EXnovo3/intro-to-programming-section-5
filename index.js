const guessInput = document.getElementById('guess');
const submitButton = document.getElementById('submit');
const resetButton = document.getElementById('reset');
const messages = document.querySelectorAll('.message');// changed to queryselector
const tooHighMessage = document.getElementById('too-high');
const tooLowMessage = document.getElementById('too-low');
const maxGuessesMessage = document.getElementById('max-guesses');
const numberOfGuessesMessage = document.getElementById('number-of-guesses');
const correctMessage = document.getElementById('correct');

let targetNumber;
let attempts = 0; // changed from const to let
const maxNumberOfAttempts = 5;

// Returns a random number from min (inclusive) to max (exclusive)
// Usage:
// > getRandomNumber(1, 50)
// <- 32
// > getRandomNumber(1, 50)
// <- 11
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function setup() { //corrected 'function' spelling
  // Get random number
  targetNumber = getRandomNumber(1, 99);
  console.log(`target number: ${targetNumber}`);

  // Reset number of attempts
  attempts = 0;

  // Enable the input and submit button
  submitButton.disabled = false; //fixed 'disabled'
  guessInput.disabled = false;

  hideAllMessages();
  resetButton.style.display = 'none';
  }

function hideAllMessages() {
  for (let elementIndex = 0; elementIndex < messages.length; elementIndex++) {
    messages[elementIndex].style.display = 'none'; // changed <= to < and '' to none
  }
}
function checkGuess() {
  // Get value from guess input element
  const guess = parseInt(guessInput.value, 10);
  let remainingAttempts = maxNumberOfAttempts - attempts;
  attempts++;

  hideAllMessages();

  if (guess === targetNumber) {
    numberOfGuessesMessage.style.display = '';
    numberOfGuessesMessage.innerHTML = `You made ${attempts} guesses`;

    correctMessage.style.display = '';

    submitButton.disabled = true;
    guessInput.disabled = true;
  } else if (guess < targetNumber) {
    tooLowMessage.style.display = '';
  } else {
    tooHighMessage.style.display = '';

  }


numberOfGuessesMessage.style.display = '';
numberOfGuessesMessage.innerHTML = `You guessed ${guess}. <br> ${remainingAttempts} guesses remaining`;
  

  if (attempts === maxNumberOfAttempts) { //extra '=' removed
    submitButton.disabled = true;
    guessInput.disabled = true;
    guessInput.value = '';
    resetButton.style.display = '';
  }
}

submitButton.addEventListener('click', checkGuess);
resetButton.addEventListener('click', setup);

setup();



