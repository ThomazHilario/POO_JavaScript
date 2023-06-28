// Crie uma função que retorne se um objeto é instancia de outro objeto
// Deve apresentar no console os valores de positivo e negativo.

function verifyInstance(object1,classe){
    if(object1 instanceof classe){
        console.log(`${object1.name} é instancia de ${classe.name}`)
    } else{
        console.log(`${object1.name} não é instancia de ${classe.name}`)
    }
}

// Function construct

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

let naruto = new Ninja('naruto',5)

verifyInstance(naruto,Ninja)