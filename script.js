let User_Selection= prompt("Choose: rock, paper, scissors!").toLocaleLowerCase();
console.log("User has selected: " + User_Selection);

switch(User_Selection){
    case "rock":
        User_Selection = 1;
        break;
    case "paper":
        User_Selection = 2;
        break;
    case "scissors":
        User_Selection = 3;
        break;
}

function Game(){
    let PC_Selection= Math.floor(Math.random()*3) +1;

    switch(PC_Selection){
        case 1:
            console.log("PC has selected: rock");
            break;
        case 2:
            console.log("PC has selected: paper");
            break;
        case 3:
            console.log("PC has selected: scissors");
            break;
    }

    return PC_Selection;
};

function PlayGame(){
    let PC_Selection= Game();
    if (User_Selection === PC_Selection + 1 || User_Selection === PC_Selection - 2){
        console.log("User has won!")
    }else if(User_Selection === PC_Selection){
        console.log("User and PC are tied");
    }else if(PC_Selection === User_Selection + 1 || PC_Selection === User_Selection - 2){
        console.log("PC has won!")
    }else{
        console.log("Wrong Selection, try again")
    }
}

PlayGame();


