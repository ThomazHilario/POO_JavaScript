/* Function que retorna um objeto */

// Parecida com function construct, porem não utilizamos o new.
// Objeto criado com o retorno da função.

function client(name){
    return {
        name:name
    }
}

let cliente1 = client('Thomaz')
let cliente2 = client('Lincoln')


console.log(cliente1,cliente2)

/* Exercicio crie uma function que retorna um objeto, porem usando métodos */

function newPeople(name,age,oculos){
    return{
        name:name,
        age:age,
        oculos:oculos,
        useOculos(){
            if(this.oculos == true){
                console.log('Usa oculos')
            }else{
                console.log('Não usa oculos')
            }
        }
    }
}

let pessoa1 = newPeople('Thomaz',18,false)
let pessoa2 = newPeople('Lincoln',18,true)

console.log(pessoa1,pessoa2)

pessoa1.useOculos()
pessoa2.useOculos()