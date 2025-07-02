let mycart_btn = document.querySelector('#mycart')
let cart_div = document.querySelector('#meu-carrinho')

let user_cart = JSON.parse(localStorage.getItem('user_cart'))

mycart_btn.addEventListener('click', () => {
    if(localStorage.getItem('login') != 'nouser'){
        cart_div.classList.toggle('hide')

        if(cart_div.classList.contains('hide')){
            cart_div.innerHTML = `
            <h1 id="cart_tittle">MEU CARRINHO</h1>
            `
        }else{
            for(let i = 0; i < user_cart.length ; i++){
                cart_div.innerHTML += `
                <div class="cart_item">
                    <img src="${user_cart[i].imagem_produto}" alt="">
                    <p class="cart_item_name">${user_cart[i].produto}</p>
                    <div id="">
                        <p class="cart_item_price_incash">${user_cart[i].preco_vista}</p> 
                        <p class="cart_item_price_installment">${user_cart[i].preco_parcela}</p> 
                    </div>
                  
                    </div>
                `
            }
        }
    }else{
        alert('Carrrinho indisponível. Usuário não logado.')
    }
  
})



// for(let x = 0; x < users.find(user => user.nome === logged_user).carrinho.length; x++){
//     cart_div.children[1].innerHTML = `
//     <div class="item id${x}">
//         <img src="${users.find(user => user.nome === logged_user).carrinho[x].imagem_produto}" alt="">
//     </div>`
// }



    // if(cart_div.classList.contains('hide')){
    //     console.log('Nem abriu o carrinho, safado....')
    // }else{
    //    
                
    //         `    
    //     }
        