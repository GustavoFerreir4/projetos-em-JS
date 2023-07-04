var time = new Date()
var year = time.getFullYear()
var sex = document.getElementsByName('sex')
function verificar(){
    var birth = Number(window.document.querySelector('#birth').value)
    var age = year - birth
    var result = window.document.querySelector('div#result')

    if (sex[0].checked){
        var gender = 'masculino'
    } else if (sex[1].checked){
        var gender = 'feminino'
    } else{
        var gender = 'undefined'
    }

    if (birth >= year || birth <= 0){
        result.innerHTML = `Por favor, digite um ano válido.`
    } else if (gender == 'undefined'){
        result.innerHTML = 'Por favor, marque a opção de sexo.'
    }

    if (age >= 1 && age < 12){
        if (gender == 'masculino'){
            if (age == 1){
                result.innerHTML = `Foi detectado um garoto de ${age} ano`
                result.innerHTML += '<img src="media/kid-boy.jpg">'
            } else{
            result.innerHTML = `Foi detectado um garoto de ${age} anos`
            result.innerHTML += '<img src="media/kid-boy.jpg">'}
        } else if (gender == 'feminino'){ 
            if (age == 1){
                result.innerHTML = `Foi detectado uma garota de ${age} ano`
                result.innerHTML +=  '<img src="media/kid-girl.jpg">'
            } else{
                result.innerHTML = `Foi detectado uma garota de ${age} anos`
                result.innerHTML +=  '<img src="media/kid-girl.jpg">'}
        }
    } else if (age >= 12 && age < 18){
        if (gender == 'masculino'){
            result.innerHTML = `Foi detectado um jovem de ${age} anos`
            result.innerHTML += '<img src="media/teenager-boy.jpg">'
        } else if (gender == 'feminino'){
            result.innerHTML = `Foi detectado uma jovem de ${age} anos`
            result.innerHTML += '<img src="media/teenager-girl.jpg">'
        }
    } else if (age >= 18 && age < 60){
        if (gender == 'masculino'){
            result.innerHTML = `Foi detectado um homem de ${age} anos`
            result.innerHTML += '<img src="media/adult-man.jpg">'
        } else if (gender == 'feminino'){
            result.innerHTML = `Foi detectado uma mulher de ${age} anos`
            result.innerHTML += '<img src="media/adult-women.jpg">'
        }
    } else if (age >= 60){
        if (gender == 'masculino'){
            result.innerHTML = `Foi detectado um senhor de ${age} anos`
            result.innerHTML += '<img src="media/old-man.jpg">'
        } else if (gender == 'feminino'){
            result.innerHTML = `Foi detectado uma senhora de ${age} anos`
            result.innerHTML += '<img src="media/old-women.jpg">'
        }
    }
}
