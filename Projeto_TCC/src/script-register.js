let olhosenha = document.querySelector('#olhosenha')
let olhoconfirmar = document.querySelector('#olhoconfirmar')
let input_senha = document.querySelector('#inputsenha')
let input_confirmar = document.querySelector('#inputconfirmar')
let input_nome = document.querySelector('#input_nome')
let input_sobrenome = document.querySelector('#input_sobrenome')
let input_numero = document.querySelector('#input_numero')
let input_email = document.querySelector('#input_email')
let confirm_button = document.querySelector('#botao')
let switcheye = 0
let switcheyeconfirmar = 0


let users = JSON.parse(localStorage.getItem('users')) || []


confirm_button.addEventListener('click', confirmar)


olhosenha.addEventListener('click', () => {
    if(switcheye == 0){
        input_senha.type = 'text'
        switcheye = 1
        olhosenha.classList.replace('bi-eye-slash', 'bi-eye')
    }else{
        input_senha.type = 'password'
        olhosenha.classList.replace('bi-eye', 'bi-eye-slash')
        switcheye = 0
    }
})

olhoconfirmar.addEventListener('click', () =>{
    if(switcheyeconfirmar == 0){
        input_confirmar.type = 'text'
        switcheyeconfirmar = 1
        olhoconfirmar.classList.replace('bi-eye-slash', 'bi-eye')
        
    }else{
        input_confirmar.type = 'password'
        switcheyeconfirmar = 0
        olhoconfirmar.classList.replace('bi-eye', 'bi-eye-slash')
    }
})

document.addEventListener('keydown', (event) => {
    if(event.key == 'Enter'){
        confirmar()
    }
})



function confirmar(){

    if(input_nome.value == ''){
        alert('por favor, nos informe seu nome')
    }else{
        if(input_sobrenome.value == ''){
            alert('por favor, nos informe seu sobrenome')
        }else{
            if(input_numero.value == ''){
                alert('por favor, nos informe seu número de telefone')
            }else{
                if(input_email.value == ''){
                    alert('por favor, nos informe seu email')
                }else{
                    if(input_senha.value == ''){
                        alert('por favor, nos informe sua senha')
                    }else{
                        if(input_confirmar.value == ''){
                            alert('por favor, confirme sua senha')
                        }else{
                            if(input_senha.value !== input_confirmar.value){ 
                                alert('as senhas não coincidem')
                            }else{

                                let user = {
                                    nome: input_nome.value,
                                    email: input_email.value,
                                    senha: input_senha.value,
                                    carrinho: [
                                                    {
                                                        imagem_produto: '',
                                                        produto: '',
                                                        preco_vista: '',
                                                        preco_parcelado: ''
                                                    }
                                                ]
                                    }
                                    

                          

                                let user_exists = users.some(existingUser => existingUser.email === user.email)

                                if(user_exists){
                                    console.log('ERROR: THIS EMAIL HAS ALREADY BEEN REGISTERED...')
                                    alert('ERRO: O email: ' + user.email + ' já foi registrado em nosso banco...')
                                    console.log(users)
                                }else{
                                    console.log("THIS EMAIL HASN'T BEEN REGISTERED...")
                                    users.push(user)
                                    localStorage.setItem('users', JSON.stringify(users))
                                    input_nome.value = ''
                                    input_sobrenome.value = ''
                                    input_numero.value = '' 
                                    input_email.value = ''
                                    input_senha.value = ''
                                    input_confirmar.value = ''
                                    alert('Você concluiu o seu cadastro!')
                                    console.log(users)
                                }
                                

                           

                            }
                        }
                    }
                }
            }
        }
    }

   
}