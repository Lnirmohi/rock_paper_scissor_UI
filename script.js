const keys = Array.from(document.querySelectorAll('.key'));

keys.forEach( key =>  key.addEventListener('click', playGame));

function playGame(event) {
    console.log(event.srcElement.id);
}

//game();

function computerPlay() {
    
    const gameValues = ['Rock', 'Paper', 'Scissor'];
    
    return gameValues[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    
    
    if(playerSelection === computerSelection) {
        
        alert(`It's a draw! You both drew ${computerSelection}`);
        
        return "draw";
    }else if(playerSelection === 'rock') {
        
        (computerSelection === 'scissor') ? showAlert("You Won! Rock beats scissor") : showAlert("You Lose! Paper beats Rock");
        
        return (computerSelection === 'scissor') ? "won" : "lose";
    }else if(playerSelection === 'paper') {
        
        (computerSelection === 'scissor') ? showAlert("You Won! Paper beats Rock") : showAlert("You Lose! Scissor beats Paper");
        
        return (computerSelection === 'rock') ? "won" :  "lose";
    }else if(playerSelection === 'scissor') {
        
        (computerSelection === 'scissor') ? showAlert("You Won! Scissor beats Paper") : showAlert("You Lose! Rock beats Scissor");
        
        return (computerSelection == 'paper') ? "won" :  "lose";
    }
}

function showAlert(alertMsg) {
    alert(alertMsg);
}

function game() {
    
    let score = {
        player: 0,
        computer: 0
    };
    
    for(let i = 1; i <= 5; i++) {
        
        let playerSelection;
        
        //loop will run untill player enter valid value i.e rock, paper or scissor
        while(true) {
            
            playerSelection = prompt("Rock Paper Scissor!!!").toLowerCase();
            
            if(playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissor"){
                break;
            }else {
                alert("Invalid choice! Please play rock, paper or scissor");
            }
        }
        
        let computerSelection = computerPlay().toLowerCase();
        
        let result = playRound(playerSelection, computerSelection);
        
        if(result != "draw"){
            result == "won" ? score.player++ : score.computer++;
        }    
    }
    
    console.log(`player: ${score.player}  ` , `computer: ${score.computer}`);
    
    if(score.player > score.computer)
    console.log("Player won the game!");
    else if(score.player < score.computer)
    console.log("Computer won the game!");
    else
    console.log("The game is tie!");
}