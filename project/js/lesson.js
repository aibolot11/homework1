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
const usdInput = document.querySelector('#usd');
const somInput = document.querySelector('#som');
const eurInput = document.querySelector('#eur');

const fetchData = async () => {
  try {
    const response = await fetch('../data/converter.json');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const converter = async (element, targetElement, secondTargetElement, current) => {
  element.oninput = async () => {
    try {
      const data = await fetchData();
      switch (current) {
        case 'som':
          targetElement.value = (element.value / data.usd).toFixed(2);
          secondTargetElement.value = (element.value / data.eur).toFixed(2);
          break;
        case 'usd':
          targetElement.value = (element.value * data.usd).toFixed(2);
          secondTargetElement.value = (element.value * data.eur / data.usd).toFixed(2);
          break;
        case 'eur':
          targetElement.value = (element.value * data.eur).toFixed(2);
          secondTargetElement.value = (element.value * data.usd / data.eur).toFixed(2);
          break;
        default:
          break;
      }
      if (element.value === '') {
        targetElement.value = '';
      }
      if (element.value === '' || targetElement.value === '' || secondTargetElement.value === '') {
        targetElement.value = '';
        secondTargetElement.value = '';
      }
    } catch (error) {
      console.error('Error converting currency:', error);
    }
  };
};

converter(somInput, usdInput, eurInput, 'som');
converter(usdInput, somInput, eurInput, 'usd');
converter(eurInput, somInput, usdInput, 'eur');




const btnPrev = document.querySelector('#btn-prev');
const btnNext = document.querySelector('#btn-next');
const cards = document.querySelector('.card');

let count = 1;
const url = 'https://jsonplaceholder.typicode.com/todos/';

const fetchRequestCards = async (num) => {
  try {
    const response = await fetch(`${url}${num}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    cards.innerHTML = `
        <p>${data.title}</p>
        <p style="color: ${data.completed ? "green" : "red"}">${data.completed}</p>
        <span>${data.id}</span>
    `;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

fetchRequestCards(count);

btnNext.addEventListener("click", async () => {
  count++;
  if (count > 200) {
    count = 1;
  }
  await fetchRequestCards(count);
});

btnPrev.onclick = async () => {
  count--;
  if (count < 1) {
    count = 200;
  }
  await fetchRequestCards(count);
};

const fetchRequest = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

fetchRequest();



//Weather-search

const searchInput = document.querySelector(".cityName")
const city = document.querySelector(".city")
const temp = document.querySelector(".temp")


const apiKey = 'e417df62e04d3b1b111abeab19cea714'
const URL = 'http://api.openweathermap.org/data/2.5/weather'
const citySearch = () => {
  searchInput.oninput = async (event) => {
    try {
      const response = await fetch(`${URL}?q=${event.target.value}&appid=${apiKey}`)
      const  data = await response.json()
      city.innerHTML = data.name ? data.name: 'Not found &iquest;'
      temp.innerHTML = data.main?.temp ? Math.round(data.main?.temp - 273) + '&deg;C' : '...'


    }catch (error){
      console.log('error')
    }

  }
}
citySearch()







