
let choice = ["rock", "paper", "scissors"];

//Write a function that randomly selects rock, paper, or scissors for the computer and a function that gets the user's choice. then compare the two choices and determine the winner.

//Create an object to track our statistics
const stats = {
    wins: 0,
    ties: 0,
    losses: 0,
    count: {
        rock: 0,
        paper: 0,
        scissors: 0
    }
}; 

//Array of options for computer to pick from 
const options = ["R", "P", "S"];

let keepPlaying = true;

//Loop unitl the user chooses to stop
while (keepPlaying) {

    //Ask user for their choice
    let userChoice = window.prompt("Enter R, P, or S:")

    //If user pressed Cancel, immediately end function
    if (!userChoice) {
        return;
    }

    // Convert to uppercase to make comparisons easier
    userChoice = userChoice.toUpperCase();

    // Check that the user made a valid choice
    if (!options.includes(userChoice)) {
        window.alert("Please enter a valid choice")
    }
    else {
        if (userChoice === "R") {
            stats.count.rock++;
        }
        else if (userChoice === "P") {
            stats.count.paper++;
        }
        else {
            stats.count.scissors++;
        }

        // Get random index from array of options
        const index = Math.floor(Math.random() * options.length);
        const computerChoice = options[index];

        window.alert(`The computer chose ${computerChoice}`);

        //If choices are the same, it's a tie
        if (userChoice === computerChoice) {
            stats.ties++;
            window.alert("It's a tie!");
        // Check every win condition for the player
        } else if (
            (userChoice === "R" && computerChoice === "S") ||
            (userChoice === "P" && computerChoice === "R") ||
            (userChoice === "S" && computerChoice === "P")
        ) {
            stats.wins++;
            window.alert("You win!")
         // If above conditions failed, assume player lost   
        }
    }
}