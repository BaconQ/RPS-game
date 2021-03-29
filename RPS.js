
let player;
let computer;
let playerWin = false;

function playRound(player, computer){

    if(player == computer){
        console.log("Its a tie, you both chose " + player);

    }

    else if (player == "rock" && computer == "scissor"){
        console.log("Player chose: " + player);
        console.log("Computer chose: " + computer);
        console.log("You win. " + player + " beats " + computer );
        return playerWin = true;

    }

    else if (player == "rock" && computer == "paper"){
        console.log("Player chose: " + player);
        console.log("Computer chose: " + computer);
        console.log("You lose. " + computer + " beats " + player);
        return playerWin = false;


    }
    else if (player == "paper" && computer == "scissor"){
        console.log("Player chose: " + player);
        console.log("Computer chose: " + computer);
        console.log("You lose. " + computer + " beats " + player );
        return playerWin = false;


    }
    else if (player == "paper" && computer == "rock"){
        console.log("Player chose: " + player);
        console.log("Computer chose: " + computer);
        console.log("You win. " + player + " beats " + computer );
        return playerWin = true;

    
    }
    else if (player == "scissor" && computer == "rock"){
        console.log("Player chose: " + player);
        console.log("Computer chose: " + computer);
        console.log("You lose. " + computer + " beats " + player );
        return playerWin = false;


    }
    else if (player == "scissor" && computer == "paper"){
        console.log("Player chose: " + player);
        console.log("Computer chose: " + computer);
        console.log("You win. " + player + " beats " + computer );
        return playerWin = true;


    
}
}