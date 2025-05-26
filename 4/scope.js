// ブロックスコープ
// 4-1-01
/*
ブロックとは、{}で囲まれた範囲のことを指します。
constやletで宣言された変数は、ブロック内でのみ有効なスコープとして扱われます。
*/
if (true) {
    const myBlockVar1 = `myBlockVar1-true`; // ブロックスコープの変数です
    console.log(myBlockVar1);
} else {
    const myBlockVar1 = `myBlockVar1-false`; // ブロックスコープの変数です
    console.log(myBlockVar1);
}
/*
コード中にmyBlockVar1が2つありますが、
それぞれのブロック内で宣言されているため、別々の変数として扱われます。
ブロックスコープはES6から導入された機能で、なるべくこのスコープを利用することが推奨されています。
*/
// 4-1-02
{
    const myBlockVar2 = `myBlockVar2`; // ブロックスコープの変数です
    console.log(myBlockVar2);
}
// console.log(myBlockVar2); // エラー:ブロック外なので利用できません


// また、ブロックはif、forを一緒に利用せずとも自由にロジック中に追加できます

// 関数スコープ
// 4-1-03
// 関数スコープとは、関数内で宣言された変数がその関数内でのみ有効なスコープのことを指します。
// 変数のスコープは、関数内で宣言された場合、関数の外からはアクセスできません。
function funcScope() {
    const myFuncVar1 = `myFuncVar1`; // 関数スコープの変数です
    console.log(myFuncVar1);
}
funcScope();
// console.log(myFuncVar1); // エラー:関数外なので利用できません

// 古くはvarを利用するしかありませんでしたが、今後新規でコードを書く場合は、つかわれないでしょう。
// 変数の巻き上げのような挙動をするため、スコープの概念が曖昧になり、バグの原因となることが多いです。

// グローバルスコープ
// 4-1-04
// 最も広いスコープで、どこからでも参照できます。
// 関数に囲まれていない変数はグローバルスコープに属します。
// 関数内でも変数を宣言する際にconstやletを使わずに宣言すると、グローバルスコープになります。

var myGlobalVar = `myGlobalVar`; // 関数等に囲まれていないため、varはグローバルスコープの変数になります

// これもグローバルスコープの変数です
myGlobalVar1 = `myGlobalVar`;

function myfunction1() {
    // varやconstがついていないため、グローバルスコープの変数になります
    myGlobalVar2 = `myGlobalVar2`;
}

console.log(myGlobalVar); // グローバルスコープの変数はどこからでも参照できます
// console.log(myGlobalVar2); // まだmyfunction1を実行していないため、エラーになります
myfunction1(); // 関数内でグローバル変数が宣言される。
console.log(myGlobalVar2); // ここではmyGlobalVar2はグローバルスコープの変数として参照できます

console.log(window.myGlobalVar2);
// ブラウザ環境では、グローバルスコープの変数はwindowオブジェクトのプロパティとしても参照できます

/*
変数の巻き上げとブロックスコープ
関数スコープでは、変数の巻き上げが起こります。「同じ関数内で同名の変数を宣言した場合、
同一の変数として扱われる」というものです。
*/
function funcHoisting() {
    var myHoistingVar1 = `myHoistingVar1`;
    console.log(myHoistingVar1);
    if(true) {
        var myHoistingVar1 = `変更`;
        console.log(myHoistingVar1);
    }
    console.log(myHoistingVar1); // => 変更
}
/*
どちらも同じ変数として扱われますが、仕様を理解していないとこれを別の変数として扱ってしまうことがあります。
letを使うことで、ブロックスコープを利用し、変数の巻き上げを防ぐことができます。

function funcHoisting() {
    let myHoistingVar1 = `myHoistingVar1`;
    console.log(myHoistingVar1);
    if(true) {
        let myHoistingVar1 = `変更`;
        console.log(myHoistingVar1);
    }
    ブロック変数なので影響を受けません
    console.log(myHoistingVar1); // => myHoistingVar1
    let myHoistingVar1 = `重複`; // エラー: 同じブロック内で同名の変数は作れません
}

const、letを利用することで、変数の巻き上げやバグを防ぐことができます。

スコープのまとめ

スコープは変数の有効範囲のことです。
JSにおいては、変数の宣言によってブロックスコープ(const, let)、関数スコープ(var)、などスコープの範囲が変化します。
varは変数の巻き上げがおこりますが、constやletを使うことでブロックスコープを利用し、変数の巻き上げを防ぐことができます。
*/
