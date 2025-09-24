let nome = document.getElementById("nome")
let novo = prompt("Informe seu nome: ")
let resultado = (novo) ? `, ${novo}!` : ", Visitante!";
let botao = document.querySelector(".botao");
let dados = document.querySelector(".dados")
let tarefas = document.getElementsByClassName("lista_tarefas")
let comecou = document.getElementById("primeiro")
let quantidadesLi = document.getElementsByTagName("li")

nome.textContent += resultado


botao.addEventListener("click", () => {
    event.preventDefault()
    
    let novoDado = document.createElement("li")
    novoDado.textContent = dados.value
    tarefas[0].appendChild(novoDado)
  
    if (quantidadesLi.length > 1){
        comecou.style.display = "none"
    }

    dados.value = ""

})
