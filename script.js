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

    let divObjects = {
       
        alert : {
            box  : document.getElementById("alert-box"),
            text : document.getElementById("alert-text")
        },
        scoreElements : {
            playerElement : document.getElementById("player"),
            computerElement : document.getElementById("computer")
        },
        announce : document.getElementById("announcement")

    };
     
    //Object of message to display and result
    let msgAndResult = playRound(playerSelection, computerPlay());

    //sending message in function
    renderAlert(msgAndResult.message, divObjects.alert);

    updateScores(msgAndResult.result, divObjects.scoreElements);

    let isGameOver = checkForWinner(divObjects.announce);

    console.log(isGameOver);

    if(isGameOver == true) {
        initializeState(divObjects);
    }
}

//return random selction 
function computerPlay() {

    return ['Rock', 'Paper', 'Scissor'][Math.floor(Math.random() * 3)];
}

//returns object of message to display and result of single game
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
function renderAlert(msg, alert) {

    alert.box.style.visibility = 'visible';

    alert.text.style.padding = "0 20px";

    alert.text.textContent = msg;
}

function updateScores(outcome, scoreElements) {

    if(outcome != "draw"){
        
        if(outcome === "won") {
            scoreElements.playerElement.textContent = ++score.player;
        }
        else {
            scoreElements.computerElement.textContent = ++score.computer;
        }
    }
}

function checkForWinner(announce) {

    if(score.player == 5 || score.computer == 5) {
        
        score.player == 5 ? announce.textContent = "Player won the game!" : announce.textContent = "Computer won the game!";

        return true;
    }

    return false;
}

//set scores to 0 and initialize announcement and alert-box values
function initializeState(reset) {

    score.player = score.computer = 0;

    setTimeout( () => {
        reset.announce.textContent = "Shoot!";
        reset.alert.box.style.visibility = "hidden";

        reset.scoreElements.playerElement.textContent = 0;
        reset.scoreElements.computerElement.textContent = 0;
    },  3000);
}