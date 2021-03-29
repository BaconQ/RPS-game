let rps = ["rock", "paper", "scissor"];
let lst = Array("rock", "paper", "scissor");
let player, computer, game;
let playerWin, pScore = 0, cScore = 0;



function playRound(player, computer){

    
    if(lst.indexOf(player) == -1){
        return -1;
    }
    
    else if(player == computer){ 
        return "tie";

    }
    else if (player == "rock" && computer == "scissor"){
        return true;

    }
    else if (player == "rock" && computer == "paper"){
        return false;

    }
    else if (player == "paper" && computer == "scissor"){
        return false;

    }
    else if (player == "paper" && computer == "rock"){
        return true;

    }
    else if (player == "scissor" && computer == "rock"){
        return false;

    }
    else if (player == "scissor" && computer == "paper"){
        return  true;

    }
}

for(let i = 0; i < 5; i++){

    player = prompt("Enter Rock, paper, or scissor!!");
    player = player.toLowerCase();
    computer = rps[Math.floor(Math.random() * rps.length)];
    game = playRound(player, computer);
    

    if(game == true){
        console.log("Round: " + (i + 1))
        console.log("Player chose: " + player);
        console.log("Computer chose: " + computer);
        console.log("You win. " + player + " beats " + computer );
        pScore++;
        

    }

    else if (game == "tie"){
        console.log("Round: " + (i + 1))
        console.log("Player chose: " + player);
        console.log("Computer chose: " + computer);
        console.log("Its a tie, you both chose " + player);

    }


    else if (game == false){
        console.log("Round: " + (i + 1))
        console.log("Player chose: " + player);
        console.log("Computer chose: " + computer);
        console.log("You lose. " + computer + " beats " + player );
        cScore++;
    

    }

    else if(game == -1){
        console.log("wrong inputs, try again")
        i--;
    }

}

if(pScore > cScore){
    console.log("score is : " + pScore +  "-" + cScore)
    console.log("You beat the AI uprising");
}
else{
    console.log("score is : " + pScore +  "-" + cScore)
    console.log("The AI are coming 0.o");
}



