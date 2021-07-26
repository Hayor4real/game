let playerAyoScore = 0;
let playerSamScore = 0;
let player3Score = 0;
let player4Score = 0;
let playerAyoWin = 0;
let playerAyoloss = 0;
let playerSamWin = 0;
let playerSamloss = 0;

let playerAyoTurn = true

function showButton(){
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
}



const message = document.getElementById("message")
const player1Win = document.getElementById("player1Win")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player1Rolldice = document.getElementById("player1Rolldice")
const player2Win = document.getElementById("player2Win")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const player2Rolldice = document.getElementById("player2Rolldice")
const player1Loss = document.getElementById("player1loss")
const player2Loss = document.getElementById("player2loss")


const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")


rollBtn.addEventListener("click", function(){
    const randomNumber = Math.floor(Math.random() * 6) + 1
    console.log(randomNumber)

    if ( playerAyoTurn === true) {

        playerAyoScore  += randomNumber 
        player1Rolldice.textContent = randomNumber
        player1Scoreboard.textContent = playerAyoScore
      player1Rolldice.classList.remove("active")
      player2Rolldice.classList.add("active")
      player1Rolldice.textContent = randomNumber
      message.textContent = ("Player Sam Turn")
    
    } else {
        playerSamScore += randomNumber
        player2Rolldice.textContent = randomNumber
        player2Scoreboard.textContent = playerSamScore
        player2Rolldice.classList.remove("active") 
        player1Rolldice.classList.add("active")
        player2Rolldice.textContent =  randomNumber
        message.textContent = ("Player Ayo Turn")

    }

    if (playerAyoScore >= 20) {
        message.textContent = "Ayo has won the game!"
        playerAyoWin += 1
       player1Win.textContent = playerAyoWin

       playerSamloss += 1
       player2Loss.textContent = playerSamloss

        showButton()
    }
    else if (playerSamScore >= 20) {
        message.textContent = "Sam has won the game!"
        playerSamWin += 1
        player2Win.textContent = playerSamWin
        playerAyoloss += 1
       player1Loss.textContent = playerAyoloss

        showButton()  
    }
playerAyoTurn = !playerAyoTurn


    
})
resetBtn.addEventListener("click", function(){
 reset()
})

function reset(){
    playerAyoScore = 0;
    playerSamScore = 0;
    playerAyoTurn = true
    player1Rolldice.textContent = "-"
    player2Scoreboard.textContent = 0
    player2Rolldice.textContent =  "-"
    player1Scoreboard.textContent = 0
    player1Rolldice.classList.add("active")
    player2Rolldice.classList.remove("active") 
    message.textContent = "Player Ayo Turn"
    rollBtn.style.display = "block"
    resetBtn.style.display = "none"
}

