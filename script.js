// Variabler för spelet
let randomNumber = Math.floor(Math.random() * 100) + 1; // Slumpmässigt tal mellan 1 och 100
let guessCount = 0;


// Funktion för att spela spelet
function checkGuess() {
    const userGuess = Number(document.querySelector('#guessInput').value); // Hämta användarens gissning
    const resultMessage = document.querySelector('#resultMessage'); // Hämta resultatmeddelande
    const guessCounter = document.querySelector('#guessCount'); // Hämta gissningsräknaren

    // Öka antal gissningar
    guessCount++;  // Uppdatera gissningsräknaren
    guessCounter.textContent = guessCount; // Visa gissningsräknaren

    // Kontrollera om gissningen är korrekt
    if (userGuess === randomNumber) {
        resultMessage.textContent = `Grattis! Du gissade rätt nummer: ${randomNumber}!`; // Visa resultatmeddelande
        resultMessage.style.color = 'green'; // Ändra färg till grön
        endGame(); // Avsluta spelet
    } else if (userGuess < randomNumber) {
        resultMessage.textContent = 'För lågt! Prova igen'; // Visa meddelande
        resultMessage.style.color = 'red'; // Ändra färg till röd
    } else if (userGuess > randomNumber) {
        resultMessage.textContent = 'För högt! Prova igen'; // Visa meddelande
        resultMessage.style.color = 'red'; // Ändra färg till röd
    }
}

// Avsluta spelet
function endGame() {
    document.querySelector('#guessInput').disabled = true; // Stäng av gissningsfältet
    document.querySelector('#submitGuess').disabled = true; // Stäng av gissa-knappen
}

// Event listener för gissningsknappen
document.querySelector('#submitGuess').addEventListener('click', checkGuess);

console.log('Slumpmässigt tal:', randomNumber); // Skriv ut slumpmässigt tal till konsolen