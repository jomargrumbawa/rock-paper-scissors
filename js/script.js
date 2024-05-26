const choices = ["rock", "paper", "scissors"]

function getComputerChoice() {
  const rand = Math.floor(Math.random() * choices.length)
  return choices[rand]
}

console.log(getComputerChoice())