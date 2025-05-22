function stopWatch(options = {}) {//分割代入
    // function stopWatch(options) { //デフォルト引数
    const addMessage = (message) => {//アロー関数
        // const addMessage = function(message) { //通常の関数
        const messageElm = document.createElement('div');
        const now = new Date();
        messageElm.innerText = now.getHours() + '時' + now.getMinutes() + '分' + now.getSeconds() + '秒 ' + message;
        messageElm.classList.add('message');
        logElm.appendChild(messageElm);
    };

    let {color, backgroundColor} = options;//分割代入
    // options = options || {}//デフォルト引数
    color = options.color || 'lightblue';
    backgroundColor = options.backgroundColor || 'black';
    const displayElm = document.getElementsByClassName('display')[0];
    displayElm.style.color = color;
    displayElm.style.backgroundColor = backgroundColor;

    const logElm = document.querySelector('.log');
    let timer = null;

    const startButton = document.getElementsByClassName('startButton')[0];
    startButton.addEventListener('click', () => {
        if (timer === null) {
            let seconds = 0;
            timer = setInterval(() => {
                seconds++;
                displayElm.innerText = seconds;
                console.log(seconds);
            }, 1000);

            addMessage('開始');
        }
    });

    const stopButton = document.getElementsByClassName('stopButton')[0];
    stopButton.addEventListener('click', () => {
        if (timer !== null) {
            clearInterval(timer);
            timer = null;

            addMessage('終了');
        }
    });
}

const options = {
    color: 'limegreen',
    backgroundColor: '#333'
};
stopWatch(options);
//stopWatch();
