let maxNum = parseInt(prompt('Enter your maximum number to guess'));

while (!maxNum) {
  maxNum = parseInt(prompt('Enter a valid maximum number to guess'));
}

const target = Math.floor(Math.random() * maxNum) + 1;

let guess = prompt('Enter your first guess:');
let attempts = 1;
while (parseInt(guess) !== target) {
  if (guess === 'q') {
    break;
  }
  if (parseInt(guess) < target) {
    guess = prompt('TOO LOW. Take another guess:');
    attempts++;
  } else {
    guess = prompt('TOO HIGH. Take another guess:');
    attempts++;
  }
}

if (guess === 'q') {
  console.log('YOU QUIT!');
} else {
  console.log(`You got it! You took ${attempts} guesses to get it right!`);
}
