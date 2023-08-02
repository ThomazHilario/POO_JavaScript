/*
    -> prototype methods
    - São métodos que já existem nas classes, por exemplo getters(pegar um dado ou um valor),setters(inserir um dado ou um valor)
*/

class Pessoa{
    constructor(name){
        this.name = name
    }
    set mudarNome(newName){
        this.name = newName
    }
    get falar(){
        console.log('Olá meu nome é ' + this.name)
    }
}

// Instanciando um objeto
let thomaz = new Pessoa('1h0maz')

// Resultados:

// chamando um método setter que mudará o nome
thomaz.mudarNome = 'Thomaz'
// chamando um método getter que pegará o nome
thomaz.falar
