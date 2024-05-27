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

function playRound(humanChoice, computerScore) {
  
}

console.log(getHumanChoice())
console.log(getComputerChoice())