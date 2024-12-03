let menu_button = window.document.querySelector('#menu-botoes')
let menu_responsive = window.document.querySelector('#botoes-responsivo')


menu_button.addEventListener('click', () => {
    console.log('clicou no menu')
    menu_responsive.classList.toggle('hide')
})
