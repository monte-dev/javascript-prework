{
  let playerScore = 0;
  let computerScore = 0;
  const playerScoreEl = document.getElementById("player-score");
  const computerScoreEl = document.getElementById("computer-score");

  const playGame = function (playerInput) {
    clearMessages();
    const getMoveName = function (argMoveId) {
      if (argMoveId == 1) {
        return "kamień";
      } else if (argMoveId == 2) {
        return "papier";
      } else if (argMoveId == 3) {
        return "nożyce";
      } else printMessage("Nie znam ruchu o id " + argMoveId + ".");
      return "nieznany ruch";
    };
    //generate random number 1-3
    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log("Wylosowana licza to: " + randomNumber);

    const computerMove = getMoveName(randomNumber);

    printMessage("Mój ruch to: " + computerMove);

    console.log("Gracz wpisał: " + playerInput);

    const playerMove = getMoveName(playerInput);

    printMessage("Twój ruch to: " + playerMove);

    const displayResult = function (argComputerMove, argPlayerMove) {
      console.log(`moves: ${argComputerMove}, ${argPlayerMove}`);

      printMessage("Zagrałem " + argComputerMove + ", a Ty " + argPlayerMove);

      if (argComputerMove == "kamień" && argPlayerMove == "papier") {
        printMessage("Ty wygrywasz");
        playerScore = ++playerScore;
        console.log("Player Score: " + playerScore);
        playerScoreEl.textContent = "Player Score: " + playerScore;
      } else if (argComputerMove == "kamień" && argPlayerMove == "kamień") {
        printMessage("Remis");
      } else if (argComputerMove == "papier" && argPlayerMove == "nożyce") {
        printMessage("Ty wygrywasz");
        playerScore = ++playerScore;
        console.log("Player Score: " + playerScore);
        playerScoreEl.textContent = "Player Score: " + playerScore;
      } else if (argComputerMove == "papier" && argPlayerMove == "papier") {
        printMessage("Remis");
      } else if (argComputerMove == "nożyce" && argPlayerMove == "kamień") {
        printMessage("Ty wygrywasz");
        playerScore = ++playerScore;
        console.log("Player Score: " + playerScore);
        playerScoreEl.textContent = "Player Score: " + playerScore;
      } else if (argComputerMove == "nożyce" && argPlayerMove == "nożyce") {
        printMessage("Remis");
      } else if (argPlayerMove == "nieznany ruch") {
        printMessage("nie wybrano numeru 1-3");
      } else {
        printMessage("Tym razem przegrywasz :(");
        computerScore = ++computerScore;
        console.log("computer score: " + computerScore);
        computerScoreEl.textContent = "Computer Score: " + computerScore;
        console.log(computerScoreEl);
      }
    };
    displayResult(computerMove, playerMove);
  };

  const rockBtn = document.getElementById("play-rock");
  const paperBtn = document.getElementById("play-paper");
  const scissorsBtn = document.getElementById("play-scissors");
  const resetBtn = document.getElementById("resetBtn");
  const messagesEl = document.getElementById("messages");

  rockBtn.addEventListener("click", function () {
    playGame(1);
  });
  paperBtn.addEventListener("click", function () {
    playGame(2);
  });
  scissorsBtn.addEventListener("click", function () {
    playGame(3);
  });
  resetBtn.addEventListener("click", () => {
    computerScoreEl.textContent = "Computer Score: ";
    computerScore = 0;
    playerScoreEl.textContent = "Player Score: ";
    playerScore = 0;
    messagesEl.textContent = "";
  });
}
