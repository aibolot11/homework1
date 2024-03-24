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


//tab slider 




const tabContent = document.querySelectorAll('.tab_content_block');
const tabs = document.querySelectorAll('.tab_content_item');
const tabsParent = document.querySelector('.tab_content_items');

let currentTabIndex = 0;
let isAutoSwitching = true;
let switchTimer;

const hideTabContent = () => {
  tabContent.forEach((content) => {
    content.style.display = 'none';
  });
  tabs.forEach((tab) => {
    tab.classList.remove('tab_content_item_active');
  });
};

const showContent = (index = 0) => {
  tabContent[index].style.display = 'block';
  tabs[index].classList.add('tab_content_item_active');
};

const startAutoSwitch = () => {
  switchTimer = setInterval(() => {
    if (isAutoSwitching) {
      currentTabIndex = (currentTabIndex + 1) % tabs.length;
      hideTabContent();
      showContent(currentTabIndex);
    }
  }, 3000);
};

startAutoSwitch();

tabsParent.onclick = (event) => {
  if (event.target.classList.contains('tab_content_item')) {
    clearInterval(switchTimer);
    isAutoSwitching = false;
    tabs.forEach((tab, tabIndex) => {
      if (event.target === tab) {
        currentTabIndex = tabIndex;
        hideTabContent();
        showContent(tabIndex);
        setTimeout(() => {
          isAutoSwitching = true;
          startAutoSwitch();
        }, 3000);
      }
    });
  }
};

hideTabContent();
showContent();


//с

const usdInput = document.querySelector('#usd')
const somInput = document.querySelector('#som')
const eurInput = document.querySelector('#eur')



const converter = (element, targetElement, secondTargetElement, current ) => {
  element.oninput = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '../data/converter.json')
    request.setRequestHeader('Content-type', 'application/json')
    request.send()

    request.onload = () => {
      const data = JSON.parse(request.response)
      switch (current) {
        case 'som':
          targetElement.value = (element.value / data.usd).toFixed(2)
          secondTargetElement.value = (element.value / data.eur).toFixed(2)
          break;
        case 'usd':
          targetElement.value = (element.value * data.usd).toFixed(2)
          secondTargetElement.value = (element.value * data.eur / data.usd).toFixed(2)
          break
        case 'eur' :
          targetElement.value = (element.value * data.eur).toFixed(2)
          secondTargetElement.value = (element.value * data.usd / data.eur).toFixed(2)
        default:
          break;
      }
      element.value === ''&& (targetElement.value = '')
      if(element.value === '' || targetElement.value === '' || secondTargetElement.value === ''){
        targetElement.value = ''
        secondTargetElement.value = ''
      }
    }
  }
}

converter(somInput, usdInput , eurInput, 'som')
converter(usdInput, somInput , eurInput, 'usd')
converter(eurInput , somInput, usdInput, 'eur')

const btnPrev = document.querySelector('#btn-prev')
const btnNext = document.querySelector('#btn-next')
const cards = document.querySelector('.card')

let count = 1
const url = 'https://jsonplaceholder.typicode.com/todos/'
const fechRequestCards = (nun) => {
  fetch(`${url}${count}`)
      .then(response => response.json())
      .then(data => {
        cards.innerHTML= `
        <p>${data.title}</p>
        <p style="color: ${data.completed ? "green":"red"}">${data.completed}</p>
        <span>${data.id}</span>
        `
      })
}
fechRequestCards(count)
btnNext.addEventListener("click", ()=>{
  count++
  if (count > 200){
    count = 1
  }
  fechRequestCards(count)
})


btnPrev.onclick = () => {
  count--
  if (count < 1 ){
    count = 200
  }
  fechRequestCards(count)
}


const fechRequest = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
}
fechRequest()








