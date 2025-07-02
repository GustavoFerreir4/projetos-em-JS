let menu_button = window.document.querySelector('#menu-botoes')
let menu_responsive = window.document.querySelector('#botoes-responsivo')


menu_button.addEventListener('click', () => {
    menu_responsive.classList.toggle('hide')
})
