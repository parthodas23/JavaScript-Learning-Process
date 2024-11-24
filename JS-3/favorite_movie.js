let favorite = "Avatar";
let guess = prompt("Enter your gess movie name: ");

while (guess != favorite) {
  if (guess == "Quit") {
    alert("You quit this game.");
    break;
  }
  guess = prompt("Wrong Answer. Quit or Try to guess the movie name: ");
}

if ((guess = favorite)) {
  alert("You win the game. Congrats");
}
