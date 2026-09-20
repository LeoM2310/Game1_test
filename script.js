
//GETTING HUMAN AND COMPUTER CHOCICES
function getComputerChoice(){
    let result= Math.floor(Math.random()*3)+1;
    return result;
}

function getHumanChoice(){
    let choice= prompt("Choose: rock, paper, scissors.").toLowerCase();
    return choice
}



//CHOICES DECLARATIONS

let humanSelection;
let computerSelection;


function playGame(){

function playRound (humanChoice, computerChoice){

//SWITCHING COMPUTER CHOICES FROM NUMBERS TO STRING
    switch (computerChoice){
        case 1:
            computerChoice = "rock"
            break;
        case 2:
            computerChoice = "paper"
            break;
        case 3:
            computerChoice = "scissors"
            break;
    }

    console.log("PC has selected: " + computerChoice);
    console.log("Human has selected: " + humanChoice);

//GAME LOGIC
    if (computerChoice === humanChoice ){
        console.log("Draw, " + computerChoice + " and " + humanChoice + " are equals!");
    }else if (computerChoice === "rock" && humanChoice === "paper" 
        || (computerChoice === "scissors" && humanChoice === "rock")
        || (computerChoice === "paper" && humanChoice === "scissors")){
        console.log("You win, " + humanChoice + " beats " + computerChoice + "!");
        humanScore++;
        return humanScore;
    }else{
        console.log("You lose, " + computerChoice + " beats " + humanChoice + "!");
        computerScore++;
        return computerScore;
    }
}
//SCORE VARIABLES
    let humanScore = 0;
    let computerScore= 0;

//LOOP BLOCK
    let rounds= 0;      
    while (rounds < 5){
        humanSelection= getHumanChoice();
        computerSelection= getComputerChoice();
        playRound(humanSelection, computerSelection);
        rounds++;
    }


//FINAL RESULT    
    if(humanScore > computerScore){
        finalResult= console.log("You have won the game!");
    }else if (humanScore === computerScore){
        finalResult= console.log("You and the computer are tied!");
    }else {
        finalResult= console.log("You have lost the game, loser!");
    }
    return finalResult;
}

playGame();