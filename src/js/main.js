

let store = document.querySelector('.store__hide-card')
let button2 = document.querySelector('.storeButton')

button2.addEventListener('click', function () {
    store.style.display = 'flex', button2.style.display = 'none'
})

let burger = document.querySelector('.burger')
let list = document.querySelector('.header__list')
let body = document.querySelector('body')

burger.onclick = function () {
    burger.classList.toggle('burger_active')
    list.classList.toggle('header__list_active')
    body.classList.toggle('hidden')
}