// 1. node reference
const againButton = document.querySelector(".again");
const number = document.querySelector(".number");
const guessNumber = document.querySelector(".guess");
const checkButton = document.querySelector(".check");
const message = document.querySelector(".message");
const score = document.querySelector(".score");
const highScore = document.querySelector(".highscore");
// 2. Generate Random Number
let RandomNumber = Math.trunc(Math.random() * 20) + 1;
let scores = 20;
console.log(RandomNumber);

const checkGreaterThanOne = (messages) => {
  // 3.3.1 Whether score greater than 1 show lost the game
  if (scores >= 1) {
    // 3.3.3 Decrease the score by 1 and show message
    scores--;
    message.textContent = messages;
    score.textContent = scores;
  } else {
    // 3.3.2 Change the message
    message.textContent = "You lost the game";
  }
};

const checkValue = () => {
  let guessValue = Number(guessNumber.value);

  // 3.1 Is there any Number or not in Input field
  if (guessValue === 0) {
    message.textContent = "Please Enter a value";
  } else if (guessValue === RandomNumber) {
    // 3.2 correct number
    message.textContent = "Correct answer";
    // 3.2.1 Instead of question mark show Random Value
    number.textContent = RandomNumber;
    // 3.2.2 Change body color to green;
    document.querySelector("body").style.backgroundColor = "green";
    // 3.2.3 score will be Highscore

    if (Number(score.innerHTML) > Number(highScore.innerHTML)) {
      highScore.innerHTML = scores;
      console.log("fgfh");
    }
  } else if (guessValue < RandomNumber) {
    // 3.3 Number is low or not
    checkGreaterThanOne("Too Low");
  } else if (guessValue > RandomNumber) {
    // 3.4 Number is High
    checkGreaterThanOne("Too High");
    // 3.4.1 Whether score greater than 1 show lost the game
    // 3.4.2 Change the message
    // 3.4.3 Decrease the score by 1 and show message
  }
};
// 3. Check Cases when we are clicking on check button
checkButton.addEventListener("click", checkValue);

const init = () => {
  // 4.1 Generate a random number
  RandomNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(RandomNumber);

  // 4.2 Change the body color to black
  document.querySelector("body").style.backgroundColor = "black";
  // 4.3 change score to 20
  scores = 20;
  score.textContent = scores;
};
// 4. Click on Again button
againButton.addEventListener("click", init);
