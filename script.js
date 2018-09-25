//predetermined results of game played and what beats what
const objOfMatchReults = {
    //played values - Winning value
	'Rock Scissor' : 'Rock',
	'Scissor Rock' : 'Rock',
	'Paper Rock'   : 'Paper',
	'Rock Paper'   : 'Paper',
	'Scissor Paper': 'Scissor',
	'Paper Scissor': 'Scissor'
};

let score = {
    player: 0,
    computer: 0
};

const keys = Array.from(document.querySelectorAll('.key'));

keys.forEach( key =>  key.addEventListener('click', playGame));

//delivers id of the selected element to game function
function playGame(event) {
    game(event.srcElement.id);
}

function game(playerSelection) {
     
    //array of message to display and result
    let msgAndResult = playRound(playerSelection, computerPlay());

    renderAlert(msgAndResult[0]);

    updateTable(msgAndResult[1]);
}


//return random selction 
function computerPlay() {
    
    const gameValues = ['Rock', 'Paper', 'Scissor'];
    
    return gameValues[Math.floor(Math.random() * 3)];
}

//returns an array of message to display and result of game
function playRound(playerSelection, computerSelection) {

    if(playerSelection === computerSelection) {
        
        return [`It's a Draw! You both drew ${computerSelection}.`, 'draw'];
    }else if(objOfMatchReults[playerSelection + " " + computerSelection] === playerSelection) {
        
        return [`You Won! ${playerSelection} beats ${computerSelection}.`,    'won'];
    }else if(objOfMatchReults[playerSelection + " " + computerSelection] === computerSelection) {
        
        return [`You Lose! ${computerSelection} beats ${playerSelection}.`,  'lose'];
    }
}

function updateTable(outcome) {
    
    if(msgAndResult[1] != "draw"){
        
        msgAndResult[1] === "won" ? score.player++ : score.computer++;
    }
}

//renders msg on alert div of index
function renderAlert(msg){

    let alertBox = document.getElementById("alert-text");

    alertBox.textContent = msg;
}