console.log("tabela da copa")

// ler o arquvivo json

const table = document.querySelector("table")
const tbody = document.querySelector("tbody")
const linha = document.querySelector("linha")


    fetch('imgs/jogos-fase1.json')
    .then(function (res) {
    return res.json()
    
})
.then (function (data) {
    //console.log(data)

    //criar uma linha de tabela, colocar ela na tabela
    data.forEach(function (jogo) {
        const row = document.createElement("tr");
       
        row.innerHTML = `
        <td>${jogo.diaSemana}</td>
        <td>${jogo.data}</td>
        <td>${jogo.hora}</td>
        <td>${jogo.grupo}</td>
        <td class='jogo'>
            <img class='imagemP' src='./imgs/bandeiras/${jogo.mandante}' />
            <span class='gols'>${jogo.gols_mandante}</span>
            ${jogo.partida}
            <span class='gols'>${jogo.gols_visitante}</span>
            <img class='imagemP' src='./imgs/bandeiras/${jogo.visitante}' />
        </td>
        <td class='esquerda'>${jogo.estadio}</td>
        `;
        
        tbody.appendChild(row);
    });
    
    //preencher os dados do jogo em cada linha da tabela


})
.catch(function (error) {console.log(error)})






