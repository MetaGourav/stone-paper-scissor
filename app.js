let userscore = 0;
let compscore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#your-score");
let compScorePara = document.querySelector("#comp-score");

let drawGame = () =>
{
    msg.innerText = "Game was Draw.Play again!";
    msg.style.backgroundColor = "#081b31";
    msg.style.color = "#fff";
};

let showWinner = (userWin ,userchoice ,compchoice) =>
{
    if(userWin)
    {
        userscore++;
        userScorePara.innerText = userscore;
        msg.innerText = `You Win,Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
        msg.style.color = "#fff";
    }
    else{
        compscore++;
        compScorePara.innerText = compscore;
        msg.innerText = `You Lost,${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "#c1121f";
        msg.style.color = "black";
    }
}

let genCompChoice = () =>
{
    const option = ["rock","paper","scissor"];
    const randomIdx = Math.floor(Math.random() * 3);
    return option[randomIdx];
};

let playGame = (userchoice) =>
{
    const compchoice = genCompChoice();

    if(userchoice === compchoice)
        {
            drawGame();
        }
    else{
        let userWin = true;
        if(userchoice === "rock")
        {
            userWin = compchoice === "paper" ? false : true;
        }
        else if(userchoice === "paper")
            {
                userWin = compchoice === "scissor" ? false : true;
            }
        else
            {
                userWin = compchoice === "rock" ? false : true;
            }
        showWinner(userWin ,userchoice ,compchoice);
    }
};


choices.forEach((choice) => {
    choice.addEventListener("click", () =>
    {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });
});