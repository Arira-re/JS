/* this
thisはオブジェクトを操作する際に利用できる変数です。
JSでは、関数の単位でthisと関係するため、独特な動作をするところがあります。
*/

/*関数呼び出しの際、所有者のオブヘクトを指し示すthis
このthisは基本的な動作で、他言語とほぼ同じ
「"関数が呼び出されたとき"にその所有者となっているオブジェクトの参照」です。
主に次の2つのケースが該当します
1オブジェクトが関数を所有している場合
2クラスを作成した場合
*/
// 1オブジェクトが関数を所有している場合
const obj1 = {
    name: 'これはobj1です',
    test: function () {
        console.log(this);
        console.log(this === obj1);
    }
};
console.log(obj1); // => {name: "これはobj1です", test: ƒ}

obj1.test();
// => {name: "これはobj1です", test: ƒ}
// => true


class MyClass {
    constructor() {
        this.name = 'これはMyClassです';
    }

    test() {
        console.log(this);
        console.log(this === instance1);
    }
}

const instance1 = new MyClass();
console.log(instance1); //=> MyClass { name: "これはMyClassです" }

instance1.test();
// => MyClass { name: "これはMyClassです" }
// => true

console.log('> 「呼び出された時」の所有者のサンプル');
const obj2 = {
    name: 'これはobj2です'
};

obj2.test = obj1.test; // obj1の関数の参照をobj2に代入

obj2.test();


console.log('> callのサンプル');

obj1.test.call(obj2); // obj1.testを呼んでいますが、これのthisをobj2に差し替えて実行します


// グローバルオブジェクト
console.log('> グローバルオブジェクトのサンプル');

// 何も関数に囲まれていないグローバルスコープのthisはグローバルオブジェクトです
console.log(this === window); // => true

function globalTest() {
    console.log(this === window); // => true
}

// オブジェクトに所有されていないのでthisはwindowです
globalTest();

/////////////
console.log('> アロー関数のサンプル');

const objArrow = {
    name: 'これはobjArrowです',
    test: function () {
        console.log('testの中です');
        console.log(this);

        const arrow = () => {
            console.log('arrowの中です');
            console.log(this); // => {name: "これはobjArrowです", test: ƒ}
            console.log(this === objArrow); // => true
        };

        const normal = function () {
            console.log('normalの中です');
            console.log(this); // => Window
            console.log(this === objArrow); // => false
        };

        arrow();
        normal();
    }
};

console.log(objArrow); //=> {name: "これはobjArrowです", test: ƒ}

objArrow.test();


// アロー関数が無かった頃の書き方
const legacyObj = {
    name: '通常関数の場合',
    test: function () {
        const self = this;
        document.body.addEventListener('click', function () {
            console.log(self.name);
        });
    }
};

legacyObj.test();

// アロー関数によってシンプルに書けるようになりました
const arrowObj = {
    name: 'アロー関数の場合',
    test: function () {
        document.body.addEventListener('click', () => {
            console.log(this.name); // これで適切にアクセスできます
        });
    }
};

arrowObj.test();

/////////////
console.log('> コンストラクタのサンプル');

function MyClass2() {
    this.name = 'これはMyClass2です';
    console.log(this);
}

MyClass2.prototype.test = function () {
    console.log(this === instance2); // => true
    console.log('test!');
};

const instance2 = new MyClass2();
instance2.test();



