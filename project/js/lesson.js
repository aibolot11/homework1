//phone chacker 
const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneSpan = document.querySelector('#phone_result')

const regExp = /^\+996 [2579]\d{2}-\d{5}-\d{7}-\d{9}$/

phoneButton.addEventListener('click', () => {
  if (regExp.test(phoneInput.value)) {
    phoneSpan.innerHTML = 'OK'
    phoneSpan.style.color = 'green'
  } else {
    phoneSpan.innerHTML = 'not OK'
    phoneSpan.style.color = 'red'
  }
})


