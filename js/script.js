
// // **
// // let randomNumber = Math.floor(Math.random() * (19 - 11 + 1) + 11)

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log("Wylosowana licza to: " + randomNumber);

let computerMove = "nieznany ruch";

if (randomNumber == 1) {
  computerMove = "kamień";
} else if (randomNumber == 2) {
  computerMove = "papier";
} else {
  computerMove = "nożyce";
}

printMessage("Mój ruch to " + computerMove);
