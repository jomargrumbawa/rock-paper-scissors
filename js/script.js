const btnWrapper = document.querySelector(".btn--wrapper")
const rockBtn = document.getElementById("rock-btn")
const paperBtn = document.getElementById("paper-btn")
const resetBtn = document.getElementById("reset-btn")
const scissorsBtn = document.getElementById("scissors-btn")
const humanScoreEl = document.getElementById("human-score")
const computerScoreEl = document.getElementById("computer-score")
const messageEl = document.getElementById("message")
const choices = ["rock", "paper", "scissors"]
let humanScore = 0
let computerScore = 0

function getComputerChoice() {
  const rand = Math.floor(Math.random() * choices.length)
  return choices[rand]
}

function getHumanChoice() {
  return prompt("rock, paper, scissors?").toLowerCase()
}

rockBtn.addEventListener("click", function() {
  playRound("rock", getComputerChoice())
})

paperBtn.addEventListener("click", function() {
  playRound("paper", getComputerChoice())
})

scissorsBtn.addEventListener("click", function() {
  playRound("scissors", getComputerChoice())
})

resetBtn.addEventListener("click", resetGame)

function playRound(humanChoice, computerChoice) {
  if (humanChoice === 'rock' && computerChoice === 'scissors') {
    humanScore++
    messageEl.textContent = "You win! Rock beats scissors."
  } else if (humanChoice === 'rock' && computerChoice === 'paper') {
    computerScore++
    messageEl.textContent = "You lose! Paper beats rock."
  } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
    humanScore++
    messageEl.textContent = "You win! Scissors beats paper."
  } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
    computerScore++
    messageEl.textContent = "You lose! Rock beats scissors."
  } else if (humanChoice === 'paper' && computerChoice === 'rock') {
    humanScore++
    messageEl.textContent = "You win! Paper beats rock."
  } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
    computerScore++
    messageEl.textContent = "You lose! Scissors beats paper."
  } else {
    messageEl.textContent = "It's a tie!"
  }
  humanScoreEl.textContent = humanScore
  computerScoreEl.textContent = computerScore

  checkScore()
}

function checkScore() {
  if (humanScore === 5) {
    messageEl.textContent = "You beat the computer!"
    btnWrapper.style.display = "none"
    resetBtn.style.display = "block"
  } else if (computerScore === 5) {
    messageEl.textContent = "The computer beat you!"
    btnWrapper.style.display = "none"
    resetBtn.style.display = "block"
  }
}

function resetGame() {
  console.log("here")
  humanScore = 0
  computerScore = 0
  humanScoreEl.textContent = humanScore
  computerScoreEl.textContent = computerScore
  messageEl.textContent = "Press button to start a game"
  resetBtn.style.display = "none"
  btnWrapper.style.display = "block"
}