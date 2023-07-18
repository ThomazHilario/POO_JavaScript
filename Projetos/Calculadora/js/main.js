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

    // Métodos das operações

    sum(n1,n2){
        return parseFloat(n1) + parseFloat(n2)
    }

    sub(n1,n2){
        return parseFloat(n1) - parseFloat(n2)
    }

    multiplication(n1,n2){
        return parseFloat(n1) * parseFloat(n2)
    }

    division(n1,n2){
        return parseFloat(n1) / parseFloat(n2)
    }

    resolution(){
        // Array
        let array = (calculator.upperValue.textContent).split(' ')
        let result = 0
        // Resultado da operação

       for(let idx = 0; idx < array.length;idx++){
            let operation = 0
            
            // Verificando se result tem valor

            if(result){
                this.reset = 1
            }

            // Multiplicação
            if(array[idx] == 'X'){
                result = calculator.multiplication(array[idx - 1],array[idx + 1])
                this.upperValue.textContent = result
                this.resultValue.textContent = result
                operation = 1
            } else if(array[idx] == '/'){
                // Divisão
                result = calculator.division(array[idx - 1],array[idx + 1])
                this.upperValue.textContent = result
                this.resultValue.textContent = result
                operation = 1
            } else if(!array.includes('X') && !array.includes('/')){
                // Soma
                if(array[idx] == '+'){
                    result = calculator.sum(array[idx - 1],array[idx + 1])
                    this.upperValue.textContent = result
                    this.resultValue.textContent = result
                    operation = 1
                } else if(array[idx] == '-'){
                    // Subtração
                    result = calculator.sub(array[idx - 1],array[idx + 1])
                    this.upperValue.textContent = result
                    this.resultValue.textContent = result
                    operation = 1
                }
            }

            // Condição tenha masi de uma operação a ser feita n acalculadora

            if(operation){
                // A primeira posição do rray recebe o valor do result
                array[idx - 1] = result
                // limpar os valores ja utilizados
                array.splice(idx,2)
                // Atualiza o indice      
                idx = 0
            }
        }
    }

    btnPress(){

        let input = this.textContent
        let upperValue = calculator.upperValue.textContent

        // variável com expressão de verificação numérica

        let verify = new RegExp('^\\d+$')

        if(calculator.reset && verify.test(input)){
            upperValue = 0
        }

        calculator.reset = 0

        // Condição caso o valor do botão seja AC

        if(input == 'AC'){
            calculator.removeCharactersInScreen()
        }else if(input == '='){
            calculator.resolution()
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
                if(verify.test(input)){
                    calculator.upperValue.textContent = input
                }
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


