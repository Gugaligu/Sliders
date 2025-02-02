let ex=document.getElementById("ex")
let inc=document.getElementById("inc")
let D=new Date()
console.log(D.getDay())
let count=D.getDay()
let regulatorSlider=0
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
}
DAYFUNC()


btnnext.addEventListener("click",function(){
    count+=1;
    console.log(count)
    regulatorSlider=!(regulatorSlider)
    document.getElementById(`DAY${Number(!(regulatorSlider))}`).textContent=(daynames.at(count%6));
    let tmp=ex.className;
    ex.className=`${inc.className}`;
    inc.className=tmp;
})
btnback.addEventListener("click",function(){
    count-=1;
    console.log(count)
    regulatorSlider=!(regulatorSlider)
    document.getElementById(`DAY${Number(!(regulatorSlider))}`).textContent=(daynames.at(count%6));
    let tmp=ex.className;
    ex.className=`${inc.className}`;
    inc.className=tmp;
})