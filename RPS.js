let rps = ["rock", "paper", "scissor"]
let player = prompt("Enter Rock, paper, or scissor!!: ");
let computer = rps[Math.floor(Math.random() * rps.length)];
let playerWin;


function playRound(player, computer){

    if(player == computer){
        console.log("Its a tie, you both chose " + player);

    }

    else if (player == "rock" && computer == "scissor"){
        return playerWin = true;

    }

    else if (player == "rock" && computer == "paper"){
        return playerWin = false;


    }
    else if (player == "paper" && computer == "scissor"){
        return playerWin = false;


    }
    else if (player == "paper" && computer == "rock"){
        return playerWin = true;

    
    }
    else if (player == "scissor" && computer == "rock"){
        return playerWin = false;


    }
    else if (player == "scissor" && computer == "paper"){
        return playerWin = true;


    
}
}
let game = playRound(player, computer);

if(game == true){
    console.log("Player chose: " + player);
    console.log("Computer chose: " + computer);
    console.log("You win. " + player + " beats " + computer );

}

else {
    console.log("Player chose: " + player);
    console.log("Computer chose: " + computer);
    console.log("You lose. " + computer + " beats " + player );
    

}


