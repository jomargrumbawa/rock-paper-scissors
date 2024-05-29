const rockBtn = document.getElementById("rock-btn")
const paperBtn = document.getElementById("paper-btn")
const scissorsBtn = document.getElementById("scissors-btn")
const humanScoreEl = document.getElementById("human-score")
const computerScoreEl = document.getElementById("computer-score")
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

function playRound(humanChoice, computerChoice) {
  if (humanChoice === 'rock' && computerChoice === 'scissors') {
    humanScore++
  } else if (humanChoice === 'rock' && computerChoice === 'paper') {
    computerScore++
  } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
    humanScore++
  } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
    computerScore++
  } else if (humanChoice === 'paper' && computerChoice === 'rock') {
    humanScore++
  } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
    computerScore++
  }
  humanScoreEl.textContent = humanScore
  computerScoreEl.textContent = computerScore
}



