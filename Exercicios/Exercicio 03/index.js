// Crie um objeto ninja, por function construct.
// Com propriedade name e método atirarShuriken()

function createNinja(name){
    this.name = name
    this.atirarShuriken = function(){
        console.log(`${this.name} Atirou a shuriken`)
    }
}

let ninja = new createNinja('Naruto')

ninja.atirarShuriken()