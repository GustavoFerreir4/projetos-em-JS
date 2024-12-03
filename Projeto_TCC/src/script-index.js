let buttons = window.document.querySelector('#botoes-responsivo')
let searchinput = window.document.querySelector('#pesquisa')
let search = ''
let logged_user = localStorage.getItem('login') || 'nouser'
let welcomemsg = document.querySelector('#welcomemsg')
let users = JSON.parse(localStorage.getItem('users')) || new Array()


if(users.find(user => user.email === 'gustavo@gmail.com')){
    console.log('User ADM já está cadastrado')
}else{
    users.push(
        {
        nome: 'Gustavo',
        email: 'gustavo@gmail.com',
        senha: 'GUSTA123',
        carrinho: [
                    ]
        }
    
    )
}

localStorage.setItem('users', JSON.stringify(users))

console.log(localStorage.getItem('login'))

if(logged_user == 'nouser'){
    console.log('Sem nenhum usuário logado...')
}else{
    console.log('User logado: ' + logged_user)
    welcomemsg.innerText = `BEM VINDO(a) ${logged_user}`
    welcomemsg.innerHTML += `
    <button id="logoff" onclick="logoff()">Logoff</button>
    `
}

searchinput.addEventListener('keyup', () => {
    search = String(searchinput.value)
    if(search == ''){
        for(let i = 0; i < items.length; i++){  
            items[i].classList.remove('hide')
        }
    }


    
    for(let i = 0; i < items.length; i++){
        items[i].classList.add('hide')
    }

    for(let i = 0; i < items.length; i++){
        if(items[i].innerText.includes(search)){
            items[i].classList.remove('hide')
        }
       
    }
})  



function logoff(){
    logged_user = 'nouser'
    localStorage.setItem('login', logged_user)
    localStorage.removeItem(user_cart)
    window.location.reload()
}