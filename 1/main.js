function addMessage() {
    var messageElm = document.createElement("div");
    var now = new Date();
    messageElm.innerText = now.getHours() + `時` + now.getMinutes() + `分` + now.getSeconds() + `秒`;
    messageElm.classList=["message"];
    logElm = appendChild(messageElm);
}

var display = document.getElementsByClassName("display")[0];
var logElm = document.getElementsByClassName(".log");
var timer = null;

var startButton = document.getElementsByClassName("startButton")[0];
startButton.addEventListener("click", function () {
    if (timer === null) {
        var seconds = 0;
        timer = setInterval(function () {
            seconds++;
            display.innerText = seconds;
            console.log(seconds);
        }, 1000);
        console.log("start:" + timer);
        addMessage("開始");
    }
});
var stopButton = document.getElementsByClassName("stopButton")[0];
stopButton.addEventListener("click", function () {
    if (timer !== null) {

    }
    console.log("stop:" + timer);
    clearInterval(timer);
    timer = null;
    addMessage("停止");
});