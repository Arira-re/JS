var startButton = document.getElementsByClassName("startButton")[0];
var display = document.getElementsByClassName("display")[0];
startButton.addEventListener("click", function() {
    console.log("start");
    var seconds=0;
    setInterval(function() {
        seconds++;
        display.innerText = seconds;
        console.log(seconds);
    }, 1000);
});