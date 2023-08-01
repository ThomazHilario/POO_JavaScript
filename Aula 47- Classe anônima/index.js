/*
    -> Classe Anônima
    - Podemos criar classe anônima pois ja que ela é considerada uma função, podemos realizar este feito.
*/

let Humano = class{
    constructor(name,age){
        this.name = name
        this.age = age
    }

    // Falando o nome da pessoa
    falar(){
        console.log(`OI meu nome é: ${this.name}`)
    }
}

// Instanciando o objeto
let thomaz = new Humano('Thomaz',18)

// Resultados
console.log(thomaz.name)
console.log(thomaz.age)
thomaz.falar()