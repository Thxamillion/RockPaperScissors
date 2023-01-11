console.log("yea ight")
let choice = "rock"
let choices = ["rock", "paper", "scissors"]
// let choice = prompt("Rock paper or scissors")



function getComputerChoice(choices){
    
    return choices[Math.floor(Math.random()*choices.length)];
    
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase()
    computerSelection =computerSelection.toLowerCase()
    
    if( playerSelection == computerSelection)
    {
        return "Tie Game!"
    } 
}
console.log(getComputerChoice(choices))