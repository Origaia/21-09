let nome = document.getElementById("nome-livro")

let autor = document.getElementById("autor")

let paginas = document.getElementById("n-paginas")

let pais = document.getElementById("pais")


let gerador = document.getElementById("gerar")
let divl = document.getElementById("livro")

gerador.addEventListener("click", 
function (){

    divl.innerHTML += `<h2>${nome.value}</h2>`
    divl.innerHTML += `<h3>${autor.value}</h3>`
    divl.innerHTML += `<p>${paginas.value}</p>`
    divl.innerHTML += `<p>${pais.value}</p>`

})
let sp1 = document.createElement("span")
let sp2 = document.createElement("span")

sp1.innerHTML='Span 1'
sp2.innerHTML='Span 2'
divl.appendChild(sp1)
divl.appendChild(sp2)
gerador.addEventListener("mouseout",
function () {divl.replaceChild(sp2, sp1)})