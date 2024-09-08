function pesquisar() {
    let section = document.getElementById("resultados-pesquisa")

let campoPesquisa = document.getElementById("campo-pesquisa").value
console.log(campoPesquisa)

if(!campoPesquisa) {
    section.innerHTML = "<p> Nenhum resultado pra a busca </p>"
    return
}

campoPesquisa = campoPesquisa.toLowerCase()

let resultados = "";
let titulo = "";
let descricao = "";
let propriedade = "";

for (let dado of operacoesMatematicas) {

    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    propriedade = dado.propriedade.toLowerCase()

    if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || propriedade.includes(campoPesquisa)) {
    resultados += ` 
        <div class="item-resultado">
            <h2>
                <a href="#" target="_blank">${dado.titulo}</a> 
            </h2>
            <h3> Propriedade: ${dado.propriedade}</h3>
            <p> Descrição: ${dado.descricao}</p>
            <p> Exemplos: ${dado.exemplos}</p>
        </div>
    `
    }
}

if (!resultados) {
    resultados = "<p>Não foi encontrado nada com esse termo</p>"
}

section.innerHTML = resultados
}



