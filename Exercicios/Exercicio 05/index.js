// crie o mesmo objeto do exemplo do exercicio 04.
// Depois crie um objeto inimigo com nome e vivo que recebe um valor true.
// E se o atirar shuriken for chamado mudará o valor do vivo do inimigo para false.

// Criando o objeto ninja

function Ninja(nome,qtd){
    this.name = nome;
    this.shurikens = qtd;
    this.atirarShurikens = function(inimigo){
        inimigo.vivo = false

        if(this.shurikens > 0){
            this.shurikens -= 1
            console.log(`${this.name} acertou o inimigo`)
        }else{
            console.log(`As shurikens acabaram agora é hora do ${this.name} correr!!!`)
        }
    }
}

// Criando o objeto inimigo

function NinjaInimigo(nome){
    this.name = nome;
    this.vivo = true;
}


let naruto = new Ninja('Naruto',5)

let pain = new NinjaInimigo('Pain')

console.log(naruto)
naruto.atirarShurikens(pain)
console.log(pain, naruto)