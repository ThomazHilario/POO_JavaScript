class List{
    constructor(){
        this.input = document.getElementById('iAdd')
        this.ul = document.querySelector('ul')
    }
    deletetask(){
        let li = this.parentElement
        li.remove()
    }
    btnClick(input){
        // Criando elemento li
        let li = document.createElement('li')
        // Modificando o conteúdo interno html do li
        li.innerHTML = `<i class="bi bi-patch-check-fill" style="color:rgb(106, 198, 106);"></i>${input}<i class="bi bi-patch-minus-fill" style="color:rgb(214, 105, 105);"></i>`
        // Jogando o li para dentro do ul(Lista)
        to_Do_List.ul.append(li)

        // Capturando icon de remover
        let deletebtn = li.lastElementChild
        deletebtn.addEventListener('click',to_Do_List.deletetask)
    }
}

// Iniciando um novo objeto
let to_Do_List = new List

// button click
const button = document.getElementById('click')
button.addEventListener('click',function(e){
    // Parando o formulário.
    e.preventDefault()

    // criando uma variável que armazena o valor do meu input, e adicionando evento de adicionar a tarefa
    let input = to_Do_List.input.value
    if(input !== ''){
        to_Do_List.btnClick(input)
    }

    // Limpando o campo
    to_Do_List.input.value = ''
})

// Window event
window.addEventListener('keydown',function(e){
    if(e.key == 'Enter'){
        // Parando o formulário.
        e.preventDefault()

        // criando uma variável que armazena o valor do meu input, e adicionando evento de adicionar a tarefa
        let input = to_Do_List.input.value
        if(input !== ''){
            to_Do_List.btnClick(input)
        }

        // Limpando o campo
        to_Do_List.input.value = ''
    }
})