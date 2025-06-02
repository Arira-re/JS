function createClosure() {
    const value = `myClosureValue`;
    function myClosure() {
        // valueはmyClosureの外ではあるが、myClosureと同じcreationClosureの
        // 関数スコープにいるので束縛する
        console.log(value);
    }
    return myClosure;
}

const closure = createClosure();//createClosure関数が呼ばれ、myClosure関数を返す
closure();// closure関数(中身はmyClosure関数)、を呼び出す

function createConterObject() {
    return {
        value: 0,
        up :function() {
            this.value++;
        },
        down: function() {
            this.value--;
        },
    }
}
const counterObj = createConterObject();
counterObj.up();
counterObj.up();
counterObj.value = 10;
counterObj.down();
console.log(counterObj.value); // => 9

function createCounter() {
    // この値は外からいじることができません
    let value = 0;
    return {
        up: function() {
            value++;
        },
        down: function() {
            value--;
        },
        getValue: function() {
            return value;
        }
    };
}
const counter = createCounter();
counter.up();
counter.up();
counter.down();
// counter.value = 10; // これはエラーになります
console.log(counter.getValue()); // => 1