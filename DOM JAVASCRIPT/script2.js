let userScore = 0;
let compScore = 0;
let userScorepara = document.querySelector("#user-score")
let compScorepara = document.querySelector("#comp-score")

const choices = document.querySelectorAll(".choice");
const msgPara = document.querySelector("#msg");


const generateComputerChoice = () => {
    const options = ["rocks", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const showWinner = (userWin) => {
    if (userWin) {
        console.log("You win");
        msg.innerText = "You win"
        userScore++;
        userScorepara.innerText = userScore

    } else {
        console.log("Your loose");
        msg.innerText = "You win"
        compScore++;
        compScorepara.innerText = compScore
    }
}

const playGame = (userChoice) => {
    console.log("User's choice", userChoice);
    const compChoice = generateComputerChoice();
    console.log("Comp's choice", compChoice);

    if (userChoice === compChoice) {
        console.log("Game was draw")
        msg.innerText = "game draw"
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
}

choices.forEach((choice) => {
    console.log(choice)
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        // console.log("Choice was clicked",userChoice);
        playGame(userChoice);
    })
})