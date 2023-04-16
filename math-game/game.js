'use strict';

const answerInput = document.querySelector('.answer');
const btnSubmit = document.querySelector('#submit');
const scoreCount = document.querySelector('.score-count');
const message = document.querySelector('.message');
const bodyStyle = document.querySelector('body');
const task = document.querySelector('.task');
const activeGame = document.querySelector('.active-game');
const finish = document.querySelector('.finish');

let score = 0;
let bestScore = 0;
let taskCount = 0;
let tasksToFinish = 20;
scoreCount.textContent = score;

function randomiseTask() {
  const taskID = Math.floor(Math.random() * calculations.length);
  task.textContent = calculations[taskID].display;
  return calculations[taskID];
}

function redirectTo() {
  location.href = `https://github.com/lukaskudzevicius/lukaskudzevicius.github.io`;
}

let calculation = randomiseTask();

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

btnSubmit.addEventListener('click', function () {
  const answer = Number(answerInput.value);
  if (answer === calculation.expression) {
    score++;
    taskCount++;
    scoreCount.textContent = score;
    displayMessage(`You are correct`);
    document.querySelector('.skip-task').classList.add('hidden');
    message.style.display = 'flex';
    bodyStyle.style = 'background-color: #60b347; transition: 0.15s ease';
    task.style = 'background-color: #60b347; transition: 0.15s ease';
    const taskID = calculations.indexOf(calculation);
    calculations.splice(taskID, 1);
    btnSubmit.disabled = true;
    answerInput.disabled = true;
    if (taskCount === tasksToFinish) {
      finishGame();
    } else {
      setTimeout(function () {
        calculation = randomiseTask();
        bodyStyle.style = 'background-color: #ccc; transition: 0.15s ease';
        task.style = 'background-color: #777777; transition: 0.15s ease';
        displayMessage('');
        btnSubmit.disabled = false;
        answerInput.disabled = false;
        answerInput.value = '';
      }, 2000);
    }
  } else if (!answer) {
    displayMessage(`You have to type something in!`);
    message.style = 'color: red;';
    setTimeout(function () {
      message.style = 'display: none;';
    }, 2000);
  } else {
    displayMessage(`Your answer is not correct!`);
    if (score > 0) {
      score--;
    }
    scoreCount.textContent = score;
    console.log(taskCount);
    document.querySelector('.skip-task').classList.remove('hidden');
    message.style = 'color: red;';
    setTimeout(function () {
      message.style = 'color: black; transition: 0.15s ease';
    }, 1000);
  }
});

document.querySelector('.info').addEventListener('click', function () {
  document.querySelector('.about').classList.remove('hidden');
  document.querySelector('.overlay').classList.remove('hidden');
});

document.querySelector('.about .close').addEventListener('click', function () {
  document.querySelector('.about').classList.add('hidden');
  document.querySelector('.overlay').classList.add('hidden');
});

document.querySelector('.overlay').addEventListener('click', function () {
  document.querySelector('.about').classList.add('hidden');
  document.querySelector('.overlay').classList.add('hidden');
});

function restartGame() {
  calculations = calculations2;
  calculation = randomiseTask();
  activeGame.classList.remove('hidden');
  finish.classList.add('hidden');
  bodyStyle.style = 'background-color: #ccc; transition: 0.15s ease';
  task.style = 'background-color: #777777; transition: 0.15s ease';
  answerInput.value = '';
  btnSubmit.disabled = false;
  answerInput.disabled = false;
  score = 0;
  scoreCount.textContent = score;
  taskCount = 0;
  displayMessage('');
}

function finishGame() {
  setTimeout(function () {
    bodyStyle.style = 'background-color: #ccc; transition: 0.15s ease';
  }, 1000);
  activeGame.classList.add('hidden');
  finish.classList.remove('hidden');
  document.querySelector('#final-score').textContent = score;
  if (bestScore < score) {
    bestScore = score;
  }
  document.querySelector('#best-score').textContent = bestScore;
}

function skipTask() {
  taskCount++;
  if (taskCount === tasksToFinish) {
    finishGame();
  }
  calculation = randomiseTask();
  document.querySelector('.skip-task').classList.add('hidden');
  answerInput.value = '';
  displayMessage('');
}
