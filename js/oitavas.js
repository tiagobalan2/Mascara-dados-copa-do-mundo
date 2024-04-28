const containerCards = document.querySelector(".divOitavas")

fetch('imgs/oitavas-de-final.json')
.then(function (res) {
    return res.json()
})


.then(function (data) {
    const divOitavas = document.createElement("div")
    divOitavas.classList.add("divOitavas")
    console.log(data)
    data.forEach(function (jogo) {
        console.log(jogo)

        const card = document.createElement("div")
        card.classList.add("card")
        card.innerHTML = `
        <div class="rodada">${jogo.rodada}</div> <br>

        <div class="data">
        <div class="diaSemana">
        ${jogo.diaSemana}
        </div>
        ${jogo.data}
        <div class="hora">
        ${jogo.hora} 
        </div>
        </div>
        <br> 
        
        <div class="partida">
        <img class="imgP" src='./imgs/bandeiras/${jogo.img_mandante}'/>

        <div class="gols">
        ${jogo.gols_mandante}
        </div>

        <div class="jogo">
        ${jogo.partida}
        </div>

        <div class="gols">
        ${jogo.gols_visitante}
        </div>

        <img class="imgP" src='./imgs/bandeiras/${jogo.img_visitante} '/> <br>

        </div>

        </div>

        ${jogo.estadio}
    

        `
        divOitavas.appendChild(card)
        document.body.appendChild(divOitavas)

    })


    })
    
  
.catch(function (error) {
    console.log(error)
})


