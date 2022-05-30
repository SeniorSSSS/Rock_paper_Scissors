playerScore = 0;
computerScore = 0;
currentRoundNumber = 0;

const gamebuttonselem = document.querySelectorAll('button');
const playerelem = document.querySelector("[data-chooser='player']")
const computerelem = document.querySelector("[data-chooser='computer']")


const computertextNode = document.createTextNode("");
const playertextNode = document.createTextNode("");

const computerscoreNode = document.createTextNode("");
const playerscoreNode = document.createTextNode("");
const roundscoreNode = document.createTextNode("");

const playerscoreelem = document.querySelector("[data-score='player']");
const computerscoreelem = document.querySelector("[data-score='computer']");
const roundscoreelem = document.querySelector("[data-score='round']");

// this takes click & sets playerselection then does playround to get result Also takes player selection and displays the current player selection
for (i of gamebuttonselem) {
    i.addEventListener('click', function () {
        console.log(this.textContent);
        let playerselection = this.textContent;
        playRound(playerselection, computerPlay());
        game();
        if (playertextNode.nodeValue != " ") {
            playertextNode.nodeValue = " "
        }
        playertextNode.nodeValue = playerselection;
        playerelem.appendChild(playertextNode);
        return;
    })
}

function gameStart() {
    alert("THE GAME HAS BEGUN");
}

// function that does computers choice & also add how it add selection to html
function computerPlay() {
    var number = Math.floor(Math.random() * 4);
    if (computertextNode.nodeValue != " ") {
        computertextNode.nodeValue = " "
    }
    if (number == 1) {
        let computerSelection = "Rock";
        computertextNode.nodeValue = "Rock"
        computerelem.appendChild(computertextNode);
        return computerSelection;
    }
    else if (number == 2) {
        let computerSelection = "Paper"; computertextNode.nodeValue = "Paper"
        computerelem.appendChild(computertextNode);
        return computerSelection;
    }
    else {
        let computerSelection = "Scissors";
        computertextNode.nodeValue = "Scissors"
        computerelem.appendChild(computertextNode);
        return computerSelection;
    }
}

// function that plays round and gives result
function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        alert("TIE");
        return resultofround = "TIE"
    }
    else if (playerSelection == "Rock" && computerSelection == "Paper") {
        alert("You lose " + playerSelection + " is not superior to " + computerSelection);
        return resultofround = "computerwin";
    }
    else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        alert("You WIN! " + playerSelection + " is superior to " + computerSelection);
        return resultofround = "playerwin";
    }
    else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        alert("You lose " + playerSelection + " is not superior to " + computerSelection);
        return resultofround = "computerwin";
    }
    else if (playerSelection == "Paper" && computerSelection == "Rock") {
        alert("You WIN! " + playerSelection + " is superior to " + computerSelection);
        return resultofround = "playerwin";
    }
    else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        alert("You lose " + playerSelection + " is not superior to " + computerSelection);
        return resultofround = "computerwin";
    }
    else {
        alert("You WIN! " + playerSelection + " is superior to " + computerSelection);
        return resultofround = "playerwin";
    }
}

// determines the number of the round & score of the game.
function game() {
    currentRoundNumber += 1;
    console.log(currentRoundNumber);
    if (roundscoreNode.nodeValue != " ") {
        roundscoreNode.nodeValue = " "
    }
    roundscoreNode.nodeValue = currentRoundNumber;
    roundscoreelem.appendChild(roundscoreNode);


    if (currentRoundNumber < 5) {
        if (resultofround === "playerwin") {
            playerScore += 1;
            // alert("The computer's current score is " + computerScore + " The player's current score is " + playerScore + " This is round number " + currentRoundNumber);

        }
        else if (resultofround === "computerwin") {
            computerScore += 1;
            // alert("The computer's current score is " + computerScore + " The player's current score is " + playerScore + " This is round number " + currentRoundNumber);
        }
        else {
            alert("This round was a tie but the game goes on");
        }
    }
    else {
        alert("The computer's current score is " + computerScore + " The player's current score is " + playerScore + " This is round number " + currentRoundNumber);
        alert("Hey this is the end of round 5 meaning the game is over");
        if (playerScore > computerScore) {
            alert("playerwin")
        }
        else {
            alert("computerwin")
        }
        ResetGameScores();
    }

    while (playerscoreNode.nodeValue != " ") {
        playerscoreNode.nodeValue = " "
    }
    playerscoreNode.nodeValue = playerScore;
    playerscoreelem.appendChild(playerscoreNode);

    while (computerscoreNode.nodeValue != " ") {
        computerscoreNode.nodeValue = " "
    }
    computerscoreNode.nodeValue = computerScore;
    computerscoreelem.appendChild(computerscoreNode);
}


// This function will reset or not reset game scores based on the users input
function ResetGameScores() {
    while (true) {
        let ResetGamePrompt = prompt("Choose yes to reset the Scores & round number. Choose no to let them grow").toLowerCase();
        switch (ResetGamePrompt) {
            case "yes":
                alert("The round number and scores of the players have been reset");
                playerScore = 0;
                computerScore = 0;
                currentRoundNumber = 0;
                return ResetGamePrompt;
            case "no":
                alert("Alright. Nothing will be reset");
                return ResetGamePrompt;
            default: alert("Enter a valid choice i.e. yes or no");
        }
    }
}




// one day you will look back and hopefully your much better at writing code !!!!!!!!!! or maybe im still bad at it lol