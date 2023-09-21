const event = document.getElementById("Titulo-Event")

let cont=0

event.addEventListener("click", 
function(){
    cont++
    event.innerHTML= 'Foi clicado:'+cont+' vezes'
})

const eventxt = document.getElementById("nome-caixa")

let nome = eventxt.value

const eventtxt = document.getElementById("event-text")

const frase = document.createElement("h2")

eventtxt.addEventListener("click", 
() => {
    frase.innerHTML = 'Olá '+nome
    document.body.appendChild(frase)
})