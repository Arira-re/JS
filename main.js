console.log("テストです");
const element = document.getElementById("innerTest");
element.innerHTML=`<strong>JavaScript</strong>で書きました`;
const button = document.getElementById("btn");
button.addEventListener("click", function() {
    alert("ボタンがクリックされました");
});