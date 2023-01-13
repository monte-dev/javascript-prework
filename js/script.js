function getMoveName(argMoveId) {
  if (argMoveId == 1) {
    return "kamień";
  } else if (argMoveId == 2) {
    return "papier";
  } else if (argMoveId == 3) {
    return "nożyce";
  } else printMessage("Nie znam ruchu o id " + argMoveId + ".");
  return "nieznany ruch";
}

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log("Wylosowana licza to: " + randomNumber);

let computerMove = getMoveName(randomNumber);

printMessage("Mój ruch to " + computerMove);

let playerInput = prompt("Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.");

console.log("Gracz wpisał: " + playerInput);

let playerMove = getMoveName(playerInput);

printMessage("Twój ruch to: " + playerMove);

function displayResult(argComputerMove, argPlayerMove) {
  console.log(`moves: ${argComputerMove}, ${argPlayerMove}`);

  printMessage("Zagrałem " + argComputerMove + ", a Ty " + argPlayerMove);

  if (argComputerMove == "kamień" && argPlayerMove == "papier") {
    printMessage("Ty wygrywasz");
  } else if (argComputerMove == "kamień" && argPlayerMove == "kamień") {
    printMessage("Remis");
  } else if (argComputerMove == "papier" && argPlayerMove == "nożyce") {
    printMessage("Ty wygrywasz");
  } else if (argComputerMove == "papier" && argPlayerMove == "papier") {
    printMessage("Remis");
  } else if (argComputerMove == "nożyce" && argPlayerMove == "kamień") {
    printMessage("Ty wygrywasz");
  } else if (argComputerMove == "nożyce" && argPlayerMove == "nożyce") {
    printMessage("Remis");
  } else if (argPlayerMove == "nieznany ruch") {
    printMessage("nie wybrano numeru 1-3");
  } else {
    printMessage("Tym razem przegrywasz :(");
  }
}
displayResult(computerMove, playerMove);
