// These are the global variables for the game. this is also a useless comment
playerScore = 0;
computerScore = 0;
currentRoundNumber = 0;

// This function randomly chooses the computer's selection 
function computerPlay() {
    var number = Math.floor(Math.random() * 4);
    if (number == 1) {
         let computerSelection = "rock";
         return computerSelection;
    }
    else if (number == 2) {
         let computerSelection = "paper";
         return computerSelection;
    }
    else {
        let computerSelection = "scissors";
        return computerSelection;
    }
  }

// This function prompts the user to make a choice for their selection & makes sure its one of the three rps choices & not blank or incorectly speeled.
  function playerChoice() {
    while (true) {
    let playerselection = prompt("Choose rock,paper,scissors. Please").toLowerCase();
    switch (playerselection) {
        case "rock":
            alert ("Thank you for choosing rock. It rocks");
            return playerselection;
        case "paper":
            alert ("Time to see if this choice will put you on a roll.");
            return playerselection;
        case "scissors":
            alert ("This choice is a cut above the rest");
            return playerselection;
        default: alert("Enter a valid choice");
    }
    }
}

//   This function plays a round and determines the results of the round when given the player and computer's selections

  function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        alert ("TIE"); 
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        alert ("You lose " + playerSelection + " is not superior to " + computerSelection);
        return resultofround = "computerwin"; 
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        alert ("You WIN! " + playerSelection + " is superior to " + computerSelection);
        return resultofround = "playerwin"; 
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        alert ("You lose " + playerSelection + " is not superior to " + computerSelection);
        return resultofround = "computerwin"; 
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        alert ("You WIN! " + playerSelection + " is superior to " + computerSelection);
        return resultofround = "playerwin";
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        alert ("You lose " + playerSelection + " is not superior to " + computerSelection);
        return resultofround = "computerwin";
    }
    else {
        alert ("You WIN! " + playerSelection + " is superior to " + computerSelection);
        return resultofround = "playerwin"; 
    }
  }

// This function increases the score of the player and the round number appropriately
function game() {
   for (let i = 0; i < 5; i++) {
       playerSelection = playerChoice();
       computerSelection = computerPlay();
       let resultofround = playRound (playerSelection, computerSelection);
       currentRoundNumber += 1;
       
        if (resultofround === "playerwin") {
        playerScore += 1;
        alert ("The computer's current score is " + computerScore + " The player's current score is " + playerScore + " This is round number " + currentRoundNumber );
        }

       else if (resultofround === "computerwin") {
            computerScore += 1;
            alert ("The computer's current score is " + computerScore + " The player's current score is " + playerScore + " This is round number " + currentRoundNumber);
         
        } 
        else {  
            alert ("This round was a tie but the computer's current score is " + computerScore + " The player's current score is " + playerScore + " This is round number " + currentRoundNumber);
        }
    }
}

// This is the main function that is run when the player clicks start (or when I add that option)
function RockPaperScissor() {
    game();
    if (currentRoundNumber >= 5) {
        alert ("Hey the game is over");
        ResetGameScores();
    }
}

// This function will reset or not reset game scores based on the users input
function ResetGameScores() {
    while (true) {
        let ResetGamePrompt = prompt("Choose yes to reset the Scores & round number. Choose no to let them grow").toLowerCase();
        switch (ResetGamePrompt) {
            case "yes":
                alert ("The round number and scores of the players have been reset");
                playerScore = 0;
                computerScore = 0;
                currentRoundNumber = 0;
                return ResetGamePrompt;
            case "no":
                alert ("Alright. Nothing will be reset");
                return ResetGamePrompt;  
            default: alert("Enter a valid choice i.e. yes or no");
        }
        }
    }

// THis function will ask the user if they would like to resart the game or not


