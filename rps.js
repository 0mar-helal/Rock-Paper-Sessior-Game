let board =document.querySelector(".game-board");
let start =document.querySelector(".game-board button");
let selectBoard=document.querySelector(".select-move");
let playerScoreBoard=document.querySelector(".player-score");
let compScoreBoard=document.querySelector(".comp-score");
let choices=document.querySelectorAll(".choices .choice");
let gameStart=document.querySelector(".play-game");
let round=document.querySelector(".play-game .result");
let hands=document.querySelectorAll(".play-game .images img");
let playerScore=document.querySelector(".player-score span.num");
let compScore=document.querySelector(".comp-score span.num");

start.onclick =function() {
    board.classList.add("hide");
    setTimeout(function() {
        selectBoard.classList.remove("hide");
        playerScoreBoard.classList.remove("hide");
        compScoreBoard.classList.remove("hide");
    },300)
}

let option=['paper','rock','scissors'];
let playerChoice,compChoice;
choices.forEach(el => {
    el.onclick =function () {
        playerChoice=el.dataset.value;
        selectBoard.classList.add("hide");
        setTimeout(function() {
            gameStart.classList.remove("hide");
        },300);
        hands[0].src=`imgs/rock2.png`;
        hands[1].src=`imgs/rock.png`;
        compChoice=option[Math.trunc(Math.random()*option.length)];
        startGame(playerChoice,compChoice);
    }
});

function startGame (player,comp) {  
    round.innerHTML='';
    setTimeout(function() {
        hands[0].src=`imgs/${player}2.png`;
        hands[1].src=`imgs/${comp}.png`;
        if(player === comp) round.innerHTML='It is a tie';
        else if(player==='scissors') {
            if(comp==='rock') round.innerHTML='Computer Win!',compScore.innerHTML++;
            else round.innerHTML='Player Win!',playerScore.innerHTML++;
            
        }
        else if(player==='rock') {
            if(comp==='scissors') round.innerHTML='Player Win!',playerScore.innerHTML++;
            else round.innerHTML='Computer Win!',compScore.innerHTML++;
        }
        else {
            if(comp==='scissors') round.innerHTML='Computer Win!',compScore.innerHTML++;
            else round.innerHTML='Player Win!',playerScore.innerHTML++;
        }
    },4300)
    gameStart.onclick =function () { 
        gameStart.classList.add("hide");
        setTimeout(function() {
            selectBoard.classList.remove("hide");
        },300)
    }
}