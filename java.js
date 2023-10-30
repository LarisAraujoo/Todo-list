let button = document.querySelector('.button-add-task')
let input = document.querySelector('.input-task')
let listaCompleta = document.querySelector('.list-tasks')

let minhaListaDeItens = []



function adicionarTarefa(){
    minhaListaDeItens.push({
        tarefa: input.value,
        concluida: false
    })
    mostrarTarefas()

    input.value = ''


}

function mostrarTarefas(){

    let novaLi = ''

    minhaListaDeItens.forEach((i, index) => {

        novaLi = novaLi + `
        
            <li class="task ${i.concluida && "done"}">
                <img src="img/checked.png" alt="check-na-tarefa" onclick='concluirTarefa(${index})'>
                <p>${i.tarefa}</p>
                <img src="img/trash.png" alt="tarefa-para-lixo" onclick='deletarItem(${index})'>
            </li>
        `
    })

    listaCompleta.innerHTML = novaLi
    
    localStorage.setItem('lista', JSON.stringify(minhaListaDeItens))
  
}

function concluirTarefa(index){
    minhaListaDeItens[index].concluida = !minhaListaDeItens[index].concluida
    mostrarTarefas()
    
}

function deletarItem(index){
    minhaListaDeItens.splice(index, 1)
    mostrarTarefas()

}

function carregarTela(){
    let tarefasDoLocalStorage = localStorage.getItem('lista')

    if(tarefasDoLocalStorage){

    minhaListaDeItens = JSON.parse(tarefasDoLocalStorage)
}
    mostrarTarefas()
    
}

carregarTela()
button.addEventListener('click', adicionarTarefa)



