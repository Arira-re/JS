/* 等価演算子と厳密等価演算子
等価演算子（==）は、値が等しいかどうかを比較します。
厳密等価演算子（===）は、値と型の両方が等しいかどうかを比較します。

等価演算子は比較する際に暗黙の型変換を行いますが、厳密等価演算子は型が違う場合偽を返します。
*/
console.log(3 == '3'); // true
console.log(3 === '3'); // false

// 参照の比較においては、等価演算子（==）と厳密等価演算子（===）で同じ結果になります。
// 参照は文字列や数値のような暗黙の型変換ができないので、完全ん一致だけで常に評価されます。
const test1 = {message: 'hello'};
const test2 = {message: 'hello'};
const test3 = test1;
console.log(test1 == test2); // => false
console.log(test1 === test2); // => false
console.log(test1 == test3); // => true
console.log(test1 === test3); // => true