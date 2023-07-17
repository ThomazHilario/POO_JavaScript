/* calculator operator */
const buttonPlus = document.getElementById('btn-plus')
const buttonMinus = document.getElementById('btn-minus')
const buttonDivision = document.getElementById('btn-divisor')
const buttonMultiplication = document.getElementById('btn-multi')
/* buttons */


class Calculator {
    constructor(){
        this.upperValue = document.getElementById('upper-number');
        this.resultValue = document.getElementById('result-number');;
        this.reset = 0;
    }

    checkpress(input,upperValue,reg){
        if((!reg.test(input) && !reg.test(upperValue.substr(upperValue.length - 1)))){
            return true
        } else{
            return false
        }
    }

    // Limpando a tela
    removeCharactersInScreen(){
        calculator.upperValue.textContent = 0
        calculator.resultValue.textContent = 0 
    }

    btnPress(){

        let input = this.textContent
        let upperValue = calculator.upperValue.textContent

        // Verificando se o usuário apertou um número
        let verify = new RegExp('^\\d+$')


        if(input == 'AC'){
            calculator.removeCharactersInScreen()
        }else{

            if(calculator.checkpress(input,upperValue,verify)){
                return false;
            }

            // Adicionando espaços entre os operadores

            if(!verify.test(input)){
                input = ` ${input} `
            }

            // aparecendo o número no painel

            if(upperValue == '0'){
                calculator.upperValue.textContent = input
            } else{
                calculator.upperValue.textContent += input
            }

        }


    }


}


// startando objeto

let calculator = new Calculator


// Stantando os buttons

let buttons = document.querySelectorAll('.btn')

// percorrendo os butões

buttons.forEach(element =>{
    element.addEventListener('click', calculator.btnPress)
})

// button equal


