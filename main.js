console.log("テストです");
const element = document.getElementById("innerTest");
element.innerHTML=`<strong>JavaScript</strong>で書きました`;
const button = document.getElementById("btn");
button.addEventListener("click", function() {
    var numberEle = document.getElementById("number");
    var val = numberEle.value;
    var num=parseInt(val);
    if(num%2==0){
        alert("偶数です");
    }
    else{
        alert("偶数ではありません");
    }
});
var fruits=[`りんご`,`ばなな`,`みかん`];
var fruitsStr=``;
for(var i=0;i<fruits.length;i++){
    fruitsStr+=`<li class=fruit>`+fruits[i]+`</li>`;
}
var arrayElm=document.getElementById(`arrayTest`);
arrayElm.innerHTML=fruitsStr;

var fruitElms=document.getElementsByClassName(`fruit`);
for(var i=0;i<fruitElms.length;i++){
    var fruitElm=fruitElms[i];
    console.log(fruitElm.textContent);
}
var colerObj={
    red:`あか`,
    green:`みどり`,
    blue:`あお`,
};
console.log(colerObj[`red`]);
console.log(colerObj.red);
console.log(colerObj.blue);

colerObj[`red`]=`レッド`;
console.log(colerObj.red) //=> レッド
colerObj.blue=`ブルー`;
console.log(colerObj.blue) //=> ブルー