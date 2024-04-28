
const urls = [
    'imgs/rodada3/classificacaoGrupoA.json',
    'imgs/rodada3/classificacaoGrupoB.json',
    'imgs/rodada3/classificacaoGrupoC.json',
    'imgs/rodada3/classificacaoGrupoD.json',
    'imgs/rodada3/classificacaoGrupoE.json',
    'imgs/rodada3/classificacaoGrupoF.json',
    'imgs/rodada3/classificacaoGrupoG.json',
    'imgs/rodada3/classificacaoGrupoH.json'
]

const tabelaExibida = document.querySelector(".tabelaExibida")

//function que exibe todas as classificacoes de uma vez

function AllCLassificationTables(urls) {
    function fetchJSONs(urls) {
        const promises = urls.map(function(url) {
            return fetch(url).then(function (res) {
                return res.json()
            })
        })
        return Promise.all(promises)
    
    }
    
    fetchJSONs(urls)
        .then(function (data) {
            
            data.forEach(function(grupo) {
                const table = document.createElement("table")
                table.classList.add('classe-table')
                const thead = document.createElement("thead")
                thead.classList.add('classe-thead')
                const h2 = document.createElement("h2")
                h2.classList.add("classe-h2")
                const headerRow = document.createElement("tr")
                headerRow.classList.add('classe-linha')
                h2.innerHTML = (`Grupo ${grupo[0].grupo}`)
                    headerRow.innerHTML = `
                    <th>#</th>
                    <th>Selecao</th>
                    <th>P</th>
                    <th>J</th>
                    <th>V</th>
                    <th>E</th>
                    <th>D</th>
                    <th>GP</th>
                    <th>GC</th>
                    <th>SG</th>
                    <th>A</th>
    
                    `;
                    table.appendChild(h2)
                    thead.appendChild(headerRow)
                    table.appendChild(headerRow)
    
                    grupo.sort(function (a, b) {
                       return a.posicao - b.posicao
                       if (a.posicao == b.posicao) {
                        return b.amarelos - a.amarelos
                       }
                    })
    
                grupo.forEach(function(selecao) {
                    const row = document.createElement("tr")
                    row.classList.add("linha")
                    row.innerHTML = `
                    <td class='esquerda'>${selecao.posicao}</td>
                    <td>${selecao.selecao}</td>
                    <td>${selecao.pontos}</td>
                    <td>${selecao.jogos}</td>
                    <td>${selecao.vitorias}</td>
                    <td>${selecao.empates}</td>
                    <td>${selecao.derrotas}</td>
                    <td>${selecao.gols_pro}</td>
                    <td>${selecao.gols_contra}</td>
                    <td>${selecao.saldo_de_gols}</td>
                    <td>${selecao.amarelos}</td>
                    `
    
    
                    table.appendChild(row);
                }) 
    
                document.body.appendChild(table)  
                
            })
               
        })
    
    
       .catch(function (error) {
        console.log(error)
       })
}


// eu tenho que parametrizar a url do fetch

exibirTabelaInicialA();

const opcaoGrupo = document.querySelector("#letraSelecionada");
opcaoGrupo.addEventListener("change", function() {

    removerTabelas();
    const grupo = opcaoGrupo.value;
    eachTableFilter(grupo);
});


function removerTabelas() {
    const tabelas = document.querySelectorAll("table")
    tabelas.forEach(function (tabela) {
        tabela.remove()

    })
}

function eachTableFilter(grupo) {
    fetch(`imgs/rodada3/classificacaoGrupo${grupo}.json`) 

        .then(function (res) {
            return res.json()
        })
        .then(function (data) {
            console.log(data)


            const table = document.createElement("table")
            table.classList.add("tabela")

            const tbody = document.createElement("tbody")
            tbody.classList.add("tbody")

            const thead = document.createElement("thead")
            thead.classList.add("thead")
            

            const cabecalho = document.createElement("tr")
            cabecalho.classList.add("cabecalho-tabela")
            cabecalho.innerHTML = `
                    <th>#</th>
                    <th>Selecao</th>
                    <th>P</th>
                    <th>J</th>
                    <th>V</th>
                    <th>E</th>
                    <th>D</th>
                    <th>GP</th>
                    <th>GC</th>
                    <th>SG</th>
                    <th>A</th>

            `
            thead.appendChild(cabecalho)
            table.appendChild(thead)


            data.sort(function (a, b) {
                return a.posicao - b.posicao
                if (a.posicao == b.posicao) {
                    return b.posicao == a.posicao
                }
            });


            data.forEach(function (selecao) {
                const row = document.createElement("tr")
                row.classList.add("row")

                row.innerHTML = `
                <td class='esquerda'>${selecao.posicao}</td>
                <td>${selecao.selecao}</td>
                <td>${selecao.pontos}</td>
                <td>${selecao.jogos}</td>
                <td>${selecao.vitorias}</td>
                <td>${selecao.empates}</td>
                <td>${selecao.derrotas}</td>
                <td>${selecao.gols_pro}</td>
                <td>${selecao.gols_contra}</td>
                <td>${selecao.saldo_de_gols}</td>
                <td>${selecao.amarelos}</td>

        `
        tbody.appendChild(row)
            })        
            table.appendChild(tbody)            

            document.body.appendChild(table)  
        })

        

        .catch(function (error) {
            console.log(error)
        })
}



function exibirTabelaInicialA() {
    fetch(`imgs/rodada3/classificacaoGrupoA.json`) 

        .then(function (res) {
            return res.json()
        })
        .then(function (data) {
            console.log(data)

            const table = document.createElement("table")
            table.classList.add("tabela")
            const tbody = document.createElement("tbody")
            tbody.classList.add("tbody")
            const thead = document.createElement("thead")
            thead.classList.add("thead")
            

            const cabecalho = document.createElement("tr")
            cabecalho.classList.add("cabecalho-tabela")

            cabecalho.innerHTML = `
            <th>#</th>
                    <th>Selecao</th>
                    <th>P</th>
                    <th>J</th>
                    <th>V</th>
                    <th>E</th>
                    <th>D</th>
                    <th>GP</th>
                    <th>GC</th>
                    <th>SG</th>
                    <th>A</th>

            `
            thead.appendChild(cabecalho)
            table.appendChild(thead)


            data.sort(function (a, b) {
                return a.posicao - b.posicao
                if (a.posicao == b.posicao) {
                    return b.posicao == a.posicao
                }
            });


            data.forEach(function (selecao) {
                const row = document.createElement("tr")
                row.classList.add("row")

                row.innerHTML = `
                <td class='esquerda'>${selecao.posicao}</td>
                <td>${selecao.selecao}</td>
                <td>${selecao.pontos}</td>
                <td>${selecao.jogos}</td>
                <td>${selecao.vitorias}</td>
                <td>${selecao.empates}</td>
                <td>${selecao.derrotas}</td>
                <td>${selecao.gols_pro}</td>
                <td>${selecao.gols_contra}</td>
                <td>${selecao.saldo_de_gols}</td>
                <td>${selecao.amarelos}</td>

        `
        tbody.appendChild(row)
            })        
            table.appendChild(tbody)            
            document.body.appendChild(table)
            
        })

        .catch(function (error) {
            console.log(error)
        })

}



const opcaoExibicao = document.querySelector("#escolha-exibicao-todos")

opcaoExibicao.addEventListener("input", function() {
    valor = opcaoExibicao.value;
    console.log("Valor da opção de exibição:", valor);
    controleExibicao(valor)

})

function controleExibicao(valor) {
    if (valor == "Sim") {
        AllCLassificationTables(urls)
    } else {
        removerTabelas();
        const grupo = document.querySelector("#letraSelecionada").value
        eachTableFilter(grupo)        
    }
}




















