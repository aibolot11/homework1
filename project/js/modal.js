//modal click me

const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('#btn-get ')
const modalCloseButton = document.querySelector('.modal_close')



const openModal = () => {
  modal.style.display = 'block'
  document.body.style.overflow = 'hidden'

}

const closeModal = () => {
  modal.style.display = 'none'
  document.body.style.overflow = ''

}

modalTrigger.onclick = () => {
  openModal()
}
modalCloseButton.onclick = () => {
  closeModal()
}

modal.onclick = (event) => {
  if(event.target === modal){
    closeModal()
  }
}

//open when scroll


let isModalOpened = false

const openModalOnce = () => {
  if (!isModalOpened) {
    openModal()
    isModalOpened = true
    window.removeEventListener('scroll', openModalOnce)
  }
}

window.addEventListener('scroll', () => {
  const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight
  if (isAtBottom) {
    openModalOnce()
  }
})





//open modal window after 10s

window.addEventListener('load', () => {
  setTimeout(() => {
    openModal()
  }, 10000)
})


