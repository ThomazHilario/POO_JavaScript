class List{
    constructor(){
        this.input = document.getElementById('iAdd')
        this.ul = document.querySelector('ul')
    }
    deletetask(){
        let li = this.parentElement
        li.remove(li)
    }
    btnClick(){
        let input = to_Do_List.input.value
        // Criando elemento li
        let li = document.createElement('li')
        // Modificando o conteúdo interno html do li
        li.innerHTML = `<i class="bi bi-patch-check-fill" style="color:rgb(106, 198, 106);"></i>${input}<i class="bi bi-patch-minus-fill" style="color:rgb(214, 105, 105);"></i>`
        // Jogando o li para dentro do ul(Lista)
        to_Do_List.ul.append(li)

        let deletebtn = li.lastElementChild
        deletebtn.addEventListener('click',to_Do_List.deletetask)
    }
}

// Parandoo envio do formulário
const form = document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault()
})
// Iniciando um novo objeto
let to_Do_List = new List

// button click
const button = document.getElementById('click')
button.addEventListener('click',to_Do_List.btnClick)

