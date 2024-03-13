document.getElementById('gmail_button').addEventListener('click', function() {
  const emailInput = document.getElementById('gmail_input').value.trim(); 
  const regExp = /^[a-zA-Z0-9]{3,15}@gmail\.com$/; 
  const resultSpan = document.getElementById('gmail_result');

  if (regExp.test(emailInput)) {
      resultSpan.textContent = 'OK';
      resultSpan.style.color = 'green';
  } else {
      resultSpan.textContent = 'Not ok';
      resultSpan.style.color = 'red';
  }
});




const parentBlock = document.querySelector('.parent_block');
const childBlock = document.querySelector('.child_block');

let positionX = 0;
let positionY = 0;
const maxOffsetWidth = parentBlock.offsetWidth - childBlock.offsetWidth;
const maxOffsetHeight = parentBlock.offsetHeight - childBlock.offsetHeight;

const moveBlock = () => {
    if (positionX < maxOffsetWidth && positionY === 0) {
        positionX++;
        childBlock.style.left = `${positionX}px`;
    } else if (positionX >= maxOffsetWidth && positionY < maxOffsetHeight) {
        positionY++;
        childBlock.style.top = `${positionY}px`;
    } else if (positionX > 0 && positionY === maxOffsetHeight) {
        positionX--;
        childBlock.style.left = `${positionX}px`;
    } else if (positionX === 0 && positionY > 0) {
        positionY--;
        childBlock.style.top = `${positionY}px`;
    }

    requestAnimationFrame(moveBlock);
};

moveBlock();










// t
const secondsElement = document.getElementById('seconds');
let timerInterval;
let seconds = 0;
let isRunning = false;

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timerInterval = setInterval(() => {
            seconds++;
            secondsElement.textContent = seconds;
        }, 1000);
    }
}

function stopTimer() {
    if (isRunning) {
        isRunning = false;
        clearInterval(timerInterval);
    }
}

function resetTimer() {
    stopTimer();
    seconds = 0;
    secondsElement.textContent = seconds;
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('stop').addEventListener('click', stopTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
