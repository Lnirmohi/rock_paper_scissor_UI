let score = {
    player: 0,
    computer: 0
};

playerKeySelection();

function playerKeySelection() {
    
    const keys = Array.from(document.querySelectorAll('.key'));

    keys.forEach( key =>  key.addEventListener('click', playGame));
}

//delivers id (playerSelection) of the selected element to game function
function playGame(event) {
    game(event.srcElement.id);
}

function game(playerSelection) {
     
    //Object of message to display and result
    let msgAndResult = playRound(playerSelection, computerPlay());

    //sending message in function
    renderAlert(msgAndResult.message);

    updateScores(msgAndResult.result);
}

//return random selction 
function computerPlay() {

    return ['Rock', 'Paper', 'Scissor'][Math.floor(Math.random() * 3)];
}

//returns an array of message to display and result of single game
function playRound(playerSelection, computerSelection) {

    //predetermined results of game played and what beats what
    const objOfMatchResults = {
        //played values - Winning value
        'Rock Scissor' : 'Rock',
        'Scissor Rock' : 'Rock',
        'Paper Rock'   : 'Paper',
        'Rock Paper'   : 'Paper',
        'Scissor Paper': 'Scissor',
        'Paper Scissor': 'Scissor'
    };

    if(playerSelection === computerSelection) {
        
        return {
            message :`It's a Draw! You both drew ${computerSelection}.`, 
            result : 'draw'
        };
    }else if(objOfMatchResults[playerSelection + " " + computerSelection] === playerSelection) {
        
        return {
            message :`You Won! ${playerSelection} beats ${computerSelection}.`,
            result : 'won'
        };
    }else if(objOfMatchResults[playerSelection + " " + computerSelection] === computerSelection) {
        
        return {
            message : `You Lose! ${computerSelection} beats ${playerSelection}.`,
            result : 'lose'
        };
    }
}

//renders msg on alert div of index
function renderAlert(msg) {

    const alert = {
        box  : document.getElementById("alert-box"),
        text : document.getElementById("alert-text")
    };

    alert.box.style.visibility = 'visible';

    alert.text.style.padding = "0 20px";

    alert.text.textContent = msg;
}

function updateScores(outcome) {

    const scoreElements = {
        playerElement : document.getElementById("player"),
        computerElement : document.getElementById("computer")
    }

    if(outcome != "draw"){
        
        if(outcome === "won") {
            scoreElements.playerElement.textContent = ++score.player;
        }
        else {
            scoreElements.computerElement.textContent = ++score.computer;
        }
    }

    if(score.player == 5 || score.computer == 5) {
        checkForWinner();

        initializeScores(scoreElements);

        setTimeout( () => {
            document.getElementById("announcement").textContent = "Shoot!";
            document.getElementById("alert-box").style.visibility = "hidden";
        },3000);
    }
}

function checkForWinner() {

    const announce = document.getElementById("announcement");

    score.player == 5 ? announce.textContent = "Player won the game!" : announce.textContent = "Computer won the game!";
}

function initializeScores(scoreElements) {

    score.player = score.computer = 0;
    
    scoreElements.playerElement.textContent = 0;
    scoreElements.computerElement.textContent = 0;
}