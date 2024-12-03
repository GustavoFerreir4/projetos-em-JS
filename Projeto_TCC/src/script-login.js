let email = document.querySelector('#input_email')
let password = document.querySelector('#inputsenha')
let button = document.querySelector('#botao')




button.addEventListener('click', checkUser)

function checkUser(){
    let user_exists = users.some(existingUser => existingUser.email === email.value)

    if(user_exists){
        console.log(users.find(user => user.email === email.value))

        if(users.find(user => user.email === email.value).senha === password.value){
            console.log('Senha correta! Login concluído.')
            let logged_user =  users.find(user => user.email === email.value).nome
            localStorage.setItem('login', logged_user)
            console.log(localStorage.getItem('login'))
            alert('Login concluído! Bem vindo ' + users.find(user => user.email === email.value).nome)
    
           
            window.location.replace('index.html')
       
    
        }else{
            console.log('ERRO: Cheque as informações digitadas!')
            alert('Senha incorreta!')
        }

    }else{
        alert('Usuário não encontrado no banco!')
    }
}

document.addEventListener('keyDown', (event) => {
    if(event.key === 'Enter'){
        checkUser()
    }
})