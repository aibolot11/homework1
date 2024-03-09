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

let position = 0;
const speed = 1;

function move() {
    position += speed;
    childBlock.style.left = position + 'px';

  
    if (position >= parentBlock.clientWidth - childBlock.clientWidth) {
        cancelAnimationFrame(requestID); 
    } else {
        requestAnimationFrame(move); 
    }
}

const requestID = requestAnimationFrame(move);
