class wordQuiz {
    constructor() {
        this.rootElm = this.rootElm
        // ゲームの状態を管理
        this.gameStatus = {
            level: null,
        };
    }
    async init() {
        await this.fetchQuizData();
        this.displayStartView();
    }
    async fetchQuizData() {
        try {
            const response = await fetch(`./quiz.json`);
            this.quizData = await response.json();
        } catch (e) {
            this.rootElm.innnerHTML = `問題の読み込みに失敗しました`;
            console.log(e);
        }
    }
    displayStartView(){
        const levelStrs = Object.keys(this.quizData);
        this.gameStatus.level = levelStrs[0];
        const optionStrs = [];
        for (let i = 0; levelStrs.length > i ; i++) {
            optionStrs.push(`<option value="${levelStrs[i]}" name="level">レベル${i+1}</option>`);
        }
        const html = `
        <select class="levelSelector">
            ${optionStrs.join(``)}
        </select>
        <button class="startBtn">スタート</button>`;
        const parentElm = document.createElement(`div`);
        parentElm.innerHTML = html;

        const selectorElm = parentElm.querySelector(`.levelSelector`);
        selectorElm.addEventListener(`chenge`, (event) => {
            this.gameStatus.level = event.target.value;
        });
        const startBtnElm = parentElm.querySelector(`.startBtn`);
        startBtnElm.addEventListener(`click`,() => {
            this.displayQuestionView();
        })
        this.replaceRootElm(parentElm);
    }
    displayQuestionView() {
        console.log(`選択中のレベル: ${this.gameStatus.level}`);
        const stepKey = `step1`;
        const currentQuestion = this.quizData[this.gameStatus.level][stepKey];
        const choiceStrs = [];
        for (const choice of currentQuestion.choices) {
            choiceStrs.push(`<lavel>
                <input type`)
        }
        const html = `
        <p>ゲームを開始しました</p>
        <button class="retireBtn">ゲームを終了する</button>`;
        const parentElm = document.createElement(`div`);
        parentElm.className = `question`
        parentElm.innerHTML = html;
        const retireBtnElm = parentElm.querySelector(`.retireBtn`);
        retireBtnElm.addEventListener(`click`, () => {
            this.displayyResultView();
        });
        this.replaceRootElm(parentElm);
    }
    displayyResultView() {
        const html = `
        <p>ゲームを終了</p>
        <button class="resetBtn">開始画面に戻る</button>`;

        const parentElm = document.createElement(`div`);
        parentElm.className = `result`;
        parentElm.innerHTML = html;
        const resetBtnElm = parentElm.querySelector(`resetBtn`);
        resetBtnElm.addEventListener(`click`, () => {
            this.displayStartView();
        });
        this.replaceView(parentElm);
    }
    replaceRootElm(elm) {
        this.rootElm.innerHTML = ``;
        this.rootElm.appendChild(elm);
    }
}
new wordQuiz(document.getElementById(`app`)).init();