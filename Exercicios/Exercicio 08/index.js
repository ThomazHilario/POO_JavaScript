// Crie um objeto caminhão e coloque propriedades distintas deste.
// Depois com o destructuring coloque essas propriedades em variáveis separadas.

function Veiculo(name,eixos,comprimento,suporte,trajetoria){
    this.name = name;
    this.eixo = eixos;
    this.comprimento = comprimento;
    this.carga = suporte;
    this.trajetoria = trajetoria;
}

let caminhao = new Veiculo('Caminãhao semi Pesado (toco)','2 eixos', '14 Metros', '6 toneladas', 'Longa distancia')

let {name,eixo,comprimento,carga,trajetoria} = caminhao


console.log(`${name} \n ${eixo} \n ${comprimento} \n ${carga} \n ${trajetoria}`)