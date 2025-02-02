let ex=document.getElementById("ex")
let inc=document.getElementById("inc")
let D=new Date()
console.log(D.getTime())
let count=D.getDay()
const btnnext=document.getElementById("btnnext")
const btnback=document.getElementById("btnback")
const daynames=["понедельник", "вторник", "среда", "четверг", "пятница", "суббота"]
const nedels=Array.from(Array(10).keys());

function DAYFUNC(){
    console.log(count)
    if(count==6){
        document.getElementById(`DAY0`).textContent=(daynames.at(0));
    }
    else{
        document.getElementById(`DAY0`).textContent=(daynames.at(count));
    }
    let tmp=ex.className;
    ex.className=`${inc.className}`;
    inc.className=tmp;}
DAYFUNC()


btnnext.addEventListener("click",function(){
    count+=1;
    document.getElementById(`DAY${Number(!(Math.abs(count)%2))}`).textContent=(daynames.at(Math.abs(count)%6));
    let tmp=ex.className;
    ex.className=`${inc.className}`;
    inc.className=tmp;
})
btnback.addEventListener("click",function(){
    count-=1;
    console.log(count)
    document.getElementById(`DAY${Number(!(count%2))}`).textContent=(daynames.at(count%6));
    let tmp=ex.className;
    ex.className=`${inc.className}`;
    inc.className=tmp;
})
