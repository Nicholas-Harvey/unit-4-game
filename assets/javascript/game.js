$(document).ready(function () {
    var startingScore = 0;
    var wins = 0;
    var losses = 0;
    var currentScore = 0;
    var randomNumber;
    var scoreNeeded;
    var agateValue;
    var lapisValue;
    var brazilianiteValue;
    var labradoriteValue;



    function startGame() {
        agateValue = Math.floor(Math.random() * 12) + 1;
        lapisValue = Math.floor(Math.random() * 12) + 1;
        brazilianiteValue = Math.floor(Math.random() * 12) + 1;
        labradoriteValue = Math.floor(Math.random() * 12) + 1;
        randomNumber = Math.floor(Math.random() * 120) + 19;
        $("#random-number").html(randomNumber);
    }

    startGame();

    function restartGame() {
        startGame()
        currentScore = 0;
        $("#score-display").html(currentScore);
    };




    $("#agate-image").on("click", function () {
        console.log("agate-value " + agateValue);
        currentScore += agateValue;
        $("#score-display").html(currentScore);
        gameChecker();
    });


    $("#lapis-lazuli-image").on("click", function () {
        console.log("lapis-lazuli-value " + lapisValue);
        currentScore += lapisValue;
        $("#score-display").html(currentScore);
        gameChecker();
    });

    $("#brazilianite-image").on("click", function () {
        console.log("brazilianite-value " + brazilianiteValue);
        currentScore += brazilianiteValue;
        $("#score-display").html(currentScore);
        gameChecker();
    });


    $("#labradorite-image").on("click", function () {
        console.log("labradorite-value " + brazilianiteValue);
        currentScore += labradoriteValue;
        $("#score-display").html(currentScore);
        gameChecker();
    });


    console.log(
        $(".start").on("click", function () {
            scoreNeeded = Math.floor((Math.random() * 65) + 1);
            $("#needed-display").html(scoreNeeded);
            $("#score-display").empty();
            $("#current-score").empty();

        }));

    function gameChecker() {
        if (currentScore === scoreNeeded) {
            wins++;
            $("#wins-display ").html(wins);
            restartGame();
        };
        if (currentScore > scoreNeeded) {
            losses++;
            $("#losses-display ").html(losses);
            restartGame();
        };
    };
});