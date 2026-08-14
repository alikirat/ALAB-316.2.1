const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10;

function checkGuess() {
    let userInput = document.getElementById("userInput").value;
    let message = document.getElementById("message");
    let attemptsDisplay = document.getElementById("attempts");

    userInput = Number(userInput);

    // Check if input is valid
    if (isNaN(userInput) || userInput < 1 || userInput > 100) {
        message.innerText = "Please enter a number between 1 and 100.";
        return;
    }

    if (userInput === randomNumber) {
        message.innerText = `🎉 Congratulations! The secret number was ${randomNumber}.`;
        disableGame();
        return;
    } else if (userInput > randomNumber) {
        message.innerText = `Try again. The secret number is lower than ${userInput}.`;
    } else {
        message.innerText = `Try again. The secret number is higher than ${userInput}.`;
    }

    attempts--;
    attemptsDisplay.innerText = `Attempts remaining: ${attempts}`;

    if (attempts === 0) {
        message.innerText = `😞 Game over. The secret number was ${randomNumber}.`;
        disableGame();
    }
}

function disableGame() {
    document.getElementById("userInput").disabled = true;
}
