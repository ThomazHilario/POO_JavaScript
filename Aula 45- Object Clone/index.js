/*
    -> )bject Clone
    - Na tentativa de resolver que a mudança do array na class filha não modifique o array da classe pai, podemos utilizar o Object Clone
    - OBS: não é muito utilizado por não ser uma das melhores saídas.
*/

function objectClone(Pai,Filho){
    // Criando a função do construtor temporário.
    function F(){}

    // Passando as propriedades e os métodos da classe pai para o contrutor temporário.
    F.prototype = Pai

    //instanciando um novo objeto
    let n = new F()

    // Criando uma propriedade uber que receberá as propriedades e métodos do Pai.
    n.uber = Pai

    // Usando o for para juntar todas as propriedades e métodos em um objeto só.
    for(let i in Filho){
        n[i] = Filho[i]
    }

    return n
}

function Veiculo(){
    this.itens = ['motor','Parabrisa','Teto Solar']
}

let v = new Veiculo

let bmw = objectClone(v,{
    name:'Bmw',
    aro:20,
})

// Adicionando elemento no array de itens
bmw.itens.push('Janela Fixa')

// Resultados:
console.log(bmw)
console.log(Veiculo)