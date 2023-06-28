// Crie um objeto ninja por meio de uma function construct
// Este objeto deve possuir nome e shurikens.
// A cada disparo da shuriken subtraia 1
// Caso a shuriken acabe o ninja não pode mais atirar a shuriken

function CreateNinja(name,shuriken){
    this.name = name
    this.shuriken = shuriken
    this.atirarShuriken = function(){

        if(this.shuriken > 0){
            this.shuriken -= 1
        } else{
            console.log(`${this.name} não tem mais shurikens`)
        }
    }
}


let ninja = new CreateNinja('Naruto',5)


console.log(ninja)

ninja.atirarShuriken()

console.log(ninja)

ninja.atirarShuriken()
ninja.atirarShuriken()
ninja.atirarShuriken()

// Aqui a shuriken acabou
ninja.atirarShuriken()
ninja.atirarShuriken()

console.log(ninja)