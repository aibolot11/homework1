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
