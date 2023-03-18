import './style.css'

const navBtn = document.querySelector('#menu')
const menuBar = document.querySelector('[role="menubar"]')

navBtn.addEventListener('click', () => {
    // get value of the aria-expanded attribute
    // isExpanded will either be true or false
    const isExpanded = JSON.parse(navBtn.getAttribute('aria-expanded'))
    // flip the value on click
    navBtn.setAttribute('aria-expanded', !isExpanded)
    // toggle on click
    menuBar.classList.toggle('hidden')
    menuBar.classList.toggle('flex')
})