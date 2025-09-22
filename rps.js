const usrInput = process.argv.slice(2);

const comp = Math.floor(Math.random() * 3 + 1);
console.log("comp: ", comp);

if (usrInput[0].toLowerCase() === "rock") {
  if (comp === 2) {
    console.log("Computer wins with Paper over Rock");
  } else if (comp === 3) {
    console.log("Player wins with Rock over Scissors");
  } else {
    console.log("draw");
  }
} else if (usrInput[0].toLowerCase() === "paper") {
  if (comp === 3) {
    console.log("Computer wins with Scissors over Paper");
  } else if (comp === 1) {
    console.log("Player wins with Paper over Rock");
  } else {
    console.log("draw");
  }
} else if (usrInput[0].toLowerCase() === "scissors") {
  if (comp === 1) {
    console.log("Computer wins with Rock over Scissors");
  } else if (comp === 2) {
    console.log("Player wins with Scissors over Paper");
  } else {
    console.log("draw");
  }
} else {
  console.log("No rps Option");
}
