var currentvalue = ''
var previousvalue = ''
var operator = ''
var result = ''
var display = window.document.querySelector('#screendisplay')


function typenumber(number){

    if (currentvalue.length>=12){
        window.alert('Excedeu o número de casas.')
    }else{

    if (currentvalue==Number(currentvalue)){
        currentvalue = String(currentvalue)
    }

    if (number=='.'){
        if (currentvalue.includes('.')){
            window.alert('O número já é decimal.')
        }else
            currentvalue += '.'
            display.innerHTML = currentvalue
    }else{

    currentvalue += number
    display.innerHTML = currentvalue
    console.log('o tamanho da string [currentvalue] é ' + currentvalue.length)

}}}
function typeoperator(op){
    previousvalue = Number(currentvalue)
    currentvalue = ''
    display.innerHTML = op
    operator = op
}

function calculate(){

    currentvalue = Number(currentvalue)

    switch (operator){ 
        case '+':
            result = previousvalue + currentvalue
        break;

        case '-':
            result = previousvalue - currentvalue
        break;

        case 'x':
            result = previousvalue * currentvalue
        break;

        case '/':
            result = previousvalue / currentvalue
        break;

        default:
            result = currentvalue
        break;

    }

    if (String(result).length>12){
        result = 'ERRO'
    }
    display.innerHTML = result
    console.log(`A operação foi ${previousvalue} ${operator} ${currentvalue}`)
    console.log(`O resultado foi ${result}`)

    if (previousvalue!==''){
        previousvalue = ''
        currentvalue = result
    }

}


function cleardisplay(){
    display.innerHTML = ''
    currentvalue = ''
    previousvalue = ''
}

function changesign(){
    currentvalue = Number(currentvalue)
    currentvalue = currentvalue*(-1)
    currentvalue = String(currentvalue)
    display.innerHTML = currentvalue
}