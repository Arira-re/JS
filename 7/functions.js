// 7-1
// 無名関数
const testFunction = function(){

};

testFunction();

const testFunction2 = () => {

};
testFunction2();

// 7-2
// 即時関数
var testValue = `test`;
(function() {
    // この中の処理も順番に実行される
    var testValue = `test1`; // このtestValueはグローバルスコープのtestValueとは別の変数(要するにローカル変数)
})();
console.log(testValue); // => : test

// これは上記の即時関数とほぼ同じ動作です
// letやconstはブロックスコープなのでこれだけでOKです
{
    let testValue = `test1`;
}
