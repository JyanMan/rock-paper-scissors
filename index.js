let rockButton = document.getElementById("rockBtn");
let paperButton = document.getElementById("paperBtn");
let scissorsButton = document.getElementById("scissorsBtn");

let wins = 0;
let loses = 0;

changePoints(0);

rockButton.onclick = () => {
    getResult("rock");
}
paperButton.onclick = () => {
    getResult("paper");
}
scissorsButton.onclick = () => {
    getResult("scissors");
}

let compResponse = function() {
    ranNum = Math.floor(Math.random()*3)+1;
    var response = "";

    switch (ranNum) {
        case 1:
            response = "rock"; break;
        case 2:
            response = "paper"; break;
        case 3: 
            response = "scissors"; break;
        default:
            alert("you got something wrong in your code");
    }

    return response;
};

function getResult(player) {
    let player_label = document.getElementById("playerResponse");
    player_label.innerHTML = player;

    computer = compResponse();
    let text = document.getElementById("compResponse");
    text.innerHTML = computer;

    let result_label = document.getElementById("winnerText");
    let result = "";
    
    switch (computer) {
        case "rock":
            if (player == "rock") {
                result = "none";
            }
            else if (player == "paper") {
                result = "player";
            }
            else if (player == "scissors") {
                result = "computer";
            }
            break;
        case "paper":
            if (player == "rock") {
                result = "computer";
            }
            else if (player == "paper") {
                result = "none";
            }
            else if (player == "scissors") {
                result = "player";
            }
            break;
        case "scissors":
            if (player == "rock") result = "player";
            else if (player == "paper") result = "computer";
            else if (player == "scissors") result = "none";
            break;
    }

    result_label.innerHTML = result;
    changePoints(result);

}

function changePoints(result) {
    let increased_points = 0;
    let player_wins = document.getElementById("wins");
    let player_loses = document.getElementById("loses");

    switch (result) {
        case "player": wins++; break;
        case "computer": loses++; break;
        case "none": break;
    } 

    player_wins.innerHTML = wins;
    player_loses.innerHTML = loses;

}