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
  console.log("human choice: ", humanChoice)
  console.log("human score: ", humanScore)
  console.log("computer choice: ", computerChoice)
  console.log("computer score: ", computerScore)
}

function playGame() {
  playRound(getHumanChoice(), getComputerChoice())
  playRound(getHumanChoice(), getComputerChoice())
  playRound(getHumanChoice(), getComputerChoice())
  playRound(getHumanChoice(), getComputerChoice())
  playRound(getHumanChoice(), getComputerChoice())
}

playGame()

