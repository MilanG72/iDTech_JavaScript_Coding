// TODO: Create a variable called "fortune" and assign a number between 0 - 10.

let userName = 'Milan';
if (userName === 'Milan') {
  console.log('Hello, Milan!');
} else {
  console.log('Hello!');
}
let userQuestion = 'What is my fortune?';
if (userQuestion) {
  console.log(`Your question is "${userQuestion}"`);
}
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';
console.log(`Let Me Think: ${eightBall}`);
switch (randomNumber) {
  case 0:
    console.log('1 low fortune');
  break;
  case 1:
    console.log('0 extremely low fortune');
  break;
  case 2:
    console.log('2 low fortune');
  break;
  case 3:
    console.log('3 low fortune');
    break;
  case 4:
    console.log('4 average fortune');
    break;
  case 5:
    console.log('5 average fortune');
    break;
  case 6:
    console.log('6 average fortune');
    break;
  case 7:
    console.log('7 average fortune');
    break;
  case 8:
    console.log('Your fortune is undetermined, try again!');
    break;
}


// TODO: Create a fortune teller game using conditional statements and comparison operators.
// Conditions
// 1. If fortune is greater than or equal to 0 and less than or equal to 3, then you have a low fortune.
// 2. If fortune is greater than 3 and less than or equal to 7, then you have an average fortune.
// 3. If fortune is greater than 7 and less than or equal to 10, then you have a good fortune.
// 4. If the fortune is out of range, then the fortune can't be read correctly.
