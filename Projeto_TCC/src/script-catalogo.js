let select_category = window.document.querySelector('#categoria')
let items = document.querySelectorAll('.item')

// Filtragem de produtos pelo Select:

select_category.addEventListener('change', () => {
    
    console.log('mudou select para: ' + select_category.value)

    if(select_category.value == 'todos'){
         for(let i = 0; i < items.length; i++){
           items[i].classList.remove('hide')
        }

        console.log('todos')
    }else if(select_category.value == 'pc-montado'){

        for(let i = 0; i < items.length; i++){
           items[i].classList.add('hide')
        }

        for(let i = 0; i < items.length; i++){
            if(String(items[i].classList).includes('pc-montado')){
                items[i].classList.remove('hide')
            }
        }

      
    }else if(select_category.value == 'placa-mae'){

        for(let i = 0; i < items.length; i++){
            items[i].classList.add('hide')
         }
 
         for(let i = 0; i < items.length; i++){
             if(String(items[i].classList).includes('placa-mae')){
                 items[i].classList.remove('hide')
             }
         }

    }else if(select_category.value == 'processador'){
        for(let i = 0; i < items.length; i++){
            items[i].classList.add('hide')
         }
 
         for(let i = 0; i < items.length; i++){
             if(String(items[i].classList).includes('processador')){
                 items[i].classList.remove('hide')
             }
         }
    }else if(select_category.value == 'memoria-ram'){
        for(let i = 0; i < items.length; i++){
            items[i].classList.add('hide')
         }
 
         for(let i = 0; i < items.length; i++){
             if(String(items[i].classList).includes('memoria')){
                 items[i].classList.remove('hide')
             }
         }
    }else if(select_category.value == 'armazenamento'){

        for(let i = 0; i < items.length; i++){
            items[i].classList.add('hide')
         }
 
         for(let i = 0; i < items.length; i++){
             if(String(items[i].classList).includes('armazenamento')){
                 items[i].classList.remove('hide')
             }
         }

    }else if(select_category.value == 'gabinete'){
        for(let i = 0; i < items.length; i++){
            items[i].classList.add('hide')
         }
 
         for(let i = 0; i < items.length; i++){
             if(String(items[i].classList).includes('gabinete')){
                 items[i].classList.remove('hide')
             }
         }

    }else if(select_category.value == 'fonte'){
        for(let i = 0; i < items.length; i++){
            items[i].classList.add('hide')
         }
 
         for(let i = 0; i < items.length; i++){
             if(String(items[i].classList).includes('fonte')){
                 items[i].classList.remove('hide')
             }
         }

    }else if(select_category.value == 'placa-de-video'){
        for(let i = 0; i < items.length; i++){
            items[i].classList.add('hide')
         }
 
         for(let i = 0; i < items.length; i++){
             if(String(items[i].classList).includes('placa-de-video')){
                 items[i].classList.remove('hide')
             }
         }

    }
})




function redirect(image, name, price_pix, price_parcela, id){



    localStorage.setItem('imagem_produto', image)
    localStorage.setItem('nome_produto', name)
    localStorage.setItem('preco_produto_pix', price_pix)
    localStorage.setItem('preco_produto_parcela', price_parcela)
    localStorage.setItem('id', id)


    let newpage = window.open('info.html')
    newpage

}

items.forEach(item => {
    item.addEventListener('click', () => {
        redirect(item.children[0].children[0].src, String(item.children[1].innerText), String(item.children[2].children[0].innerText), Number(item.children[2].children[1].children[1].innerHTML.replace('.', '').replace(',', '.')), item.classList[2])
    })

})

for(let i = 0; i < items.length ; i++){
    items[i].classList.add(`id${i}`)
}   

