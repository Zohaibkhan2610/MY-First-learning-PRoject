let you = 0;
let comp = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScorePara = document.getElementById("your-scorce");
let aiScore = document.getElementById("Ai-score");
const genCompChoice = () => {
  const option = ["Rock", "Paper", "scissor"];
  const ranIdx = Math.floor(Math.random() * 3);
  return option[ranIdx];
};
let compChoice = genCompChoice();

let draw = () => {
  console.log(`Game is a draw. Play Again`);
  msg.style.backgroundColor = "Black";
  msg.style.color = "white";
  msg.innerText = `Game was a draw. Play Again.`;
};

let showWinner = (userWIN,compChoice,userChoice) => {
  if (userWIN) {
     you++;
     userScorePara.innerText = you;
    msg.style.backgroundColor = "Green";
    msg.style.color = "Black";
    msg.innerText = "You Win";

  } else {
    comp++;
    aiScore.innerText = comp;
    msg.style.backgroundColor = "red";
    msg.style.color = "aqua";
    msg.innerText = "You lose";
  }
};

const playGame = (userChoice) => { // Pass userChoice as an argument
  console.log(`You have selected ${userChoice}`);
  compChoice = genCompChoice(); // Generate new computer choice on each play
  console.log(`Computer has selected ${compChoice}`);

  if (userChoice === compChoice) {
    draw();
  } else {
    let userWIN = true;
    if (userChoice === "Rock") {
      userWIN = compChoice === "Paper" ? false : true;
    } else if (userChoice === "Paper") {
      userWIN = compChoice === "scissor" ? false : true;
    } else {
      userWIN = compChoice === "Rock" ? false : true;
    }
    showWinner(userWIN);
  }
};

choices.forEach((choice) => {
  choice.addEventListener(
    "click",
    () => {
      let userChoice = choice.getAttribute("id"); // Get user choice from clicked element's ID
      playGame(userChoice); // Pass userChoice to playGame function
    }
  );
});
