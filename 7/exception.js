function displayName() {
    if (!name){
        throw new Error("Name is required");
    }
    console.log(`名前は${name}です`);
}
try {
    displayName();
} catch (error) {
    console.error(`名前表示に失敗しました:, ${error.message}`);
}

class InputError extends Error {}
function share(input) {
    const value = parseInt(input);
    if (!Number.isInteger(value)) {
        throw new InputError(`入力値が不正です`);
    }
    if (value < 0) {
        throw new InputError(`正の整数を入力してください`);
    }
    return divide(100, value);
}
function divide(lhv, rhv) {
    if (rhv === 0) {
        throw new Error(`0では演算できません`);
    }
    return lhv / rhv;
}

try {
    const input = prompt(`100円を分ける人数を入力してください`,1);
    const result = share(input);
    console.log(`1人分は${result}円です`);
} catch (error) {
    if (error instanceof InputError) {
        alert(`入力値は正の整数を入れてください。リロードします`)
        location.reload();
        }else if (error instanceof Error) {
            console.error(e);
            alert(`予期しないエラーが発生しました。終了します`);
    }
}