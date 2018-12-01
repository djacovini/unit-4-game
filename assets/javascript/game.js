$(document).ready(function() {

//Global Variables//
var compNumb = 0;
var crystalOne = 0;
var crystalTwo = 0;
var crystalThree = 0;
var crystalFour = 0;
var playerTot = 0;
var wins = 0;
var losses = 0;

//reset//
function gameReset() {
    compNumb = Math.floor((Math.random() * 101) + 19);
    crystalOne = Math.floor((Math.random() * 12) + 1);
    crystalTwo = Math.floor((Math.random() * 12) + 1);
    crystalThree = Math.floor((Math.random() * 12) + 1);
    crystalFour = Math.floor((Math.random() * 12) + 1);
    playerTot = 0;
    $("#computer-total").text(compNumb);
    $("#player-total").text(playerTot);
    $("#wintot").text(wins);
    $("#losstot").text(losses);
}
gameReset();

//game play//
$("#computer-total").text(compNumb);
$("#crystal-1").on("click", function() {
    playerTot =  playerTot + crystalOne;
    $("#player-total").text(playerTot);
    if (playerTot === compNumb) {
        alert("you win");
        wins++;
        gameReset();
    }
    else if (playerTot > compNumb) {
        alert("bust!!!");
        losses++;
        gameReset();
    }
});
$("#crystal-2").on("click", function() {
    playerTot =  playerTot + crystalTwo;
    $("#player-total").text(playerTot);
    if (playerTot === compNumb) {
        alert("you win");
        wins++;
        gameReset();
    }
    else if (playerTot > compNumb) {
        alert("bust!!!");
        losses++;
        gameReset();
    }
});
$("#crystal-3").on("click", function() {
    playerTot =  playerTot + crystalThree;
    $("#player-total").text(playerTot);
    if (playerTot === compNumb) {
        alert("you win");
        wins++;
        gameReset();
    }
    else if (playerTot > compNumb) {
        alert("bust!!!");
        losses++;
        gameReset();
    }
});
$("#crystal-4").on("click", function() {
    playerTot =  playerTot + crystalFour;
    $("#player-total").text(playerTot);
    if (playerTot === compNumb) {
        alert("you win");
        wins++;
        gameReset();
    }
    else if (playerTot > compNumb) {
        alert("bust!!!");
        losses++;
        gameReset();
    }

});

})
