// Generate a random number between 1 - 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10;

function guessNumberGame() {
    while (attempts > 0) {
        let userInput = prompt(`Guess the secret number between 1 and 100. You have ${attempts} attempts remaining!`);
        
        // Converting user input into a number
        userInput = Number(userInput);
        
        // Check if input is valid
        if (isNaN(userInput) || userInput < 1 || userInput > 100) {
            alert(`The number you guessed needs to be between 1 and 100. Please try again.`);
            continue; // Skip the loop iteration and ask again
        }

        if (userInput === randomNumber) {
            alert(`Congratulations!!! The number you guessed, ${userInput}, is the secret number. Seems like you're unbeatable... or maybe it's just luck. Play Again!`);
            return; // End game since user won
        } else if (userInput > randomNumber) {
            alert(`Try again. The secret number is lower than ${userInput}.`);
        } else {
            alert(`Try again. The secret number is higher than ${userInput}.`);
        }
        
        attempts--; // Decrementing by 1
    }

    alert(`😞 Game over. You gave it your best shot. The secret number was ${randomNumber}. Hey, there's always next time, right?`);
}

// Call the function to start the game
guessNumberGame();