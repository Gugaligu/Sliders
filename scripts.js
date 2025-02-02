let ex=document.getElementById("ex")
let inc=document.getElementById("inc")
let D=new Date()
let Dayofnedel=6
let regulatorSlider=0
const btnnext=document.getElementById("btnnext")
const btnback=document.getElementById("btnback")
const daynames=["понедельник", "вторник", "среда", "четверг", "пятница", "суббота"]
const nedels=Array.from(Array(10).keys());


function getnedel() {
    const today = new Date();
    let year = today.getFullYear();
    const septemberFirst = new Date(year, 8, 1); 
    if (today < septemberFirst) {year -= 1;}
    const lastSeptemberFirst = new Date(year, 8, 1);
    const diffInMilliseconds = today - lastSeptemberFirst;
    let weeksPassed = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24 * 7));
    if (Dayofnedel==0){weeksPassed+=1;}
    return weeksPassed;
}


function DAYFUNC(){
    if(Dayofnedel==0){
        document.getElementById(`DAY1`).textContent=(daynames.at(0));
        console.log(Dayofnedel)
    }
    else if(Dayofnedel==6){
        document.getElementById(`DAY1`).textContent=(daynames.at(5));
        Dayofnedel=5
    }
    else{
        document.getElementById(`DAY1`).textContent=(daynames.at(Dayofnedel));
    }
}
DAYFUNC()




btnnext.addEventListener("click",function(){
    Dayofnedel+=1;
    console.log(Dayofnedel)
    regulatorSlider=!(regulatorSlider)
    document.getElementById(`DAY${Number(!(regulatorSlider))}`).textContent=(daynames.at(Dayofnedel%6));
    let tmp=inc.className;
    inc.className=`${ex.className}`;
    ex.className=tmp;
})
btnback.addEventListener("click",function(){
    Dayofnedel-=1;
    console.log(Dayofnedel)
    regulatorSlider=!(regulatorSlider)
    document.getElementById(`DAY${Number(!(regulatorSlider))}`).textContent=(daynames.at(Dayofnedel%6));
    let tmp=inc.className;
    inc.className=`${ex.className}`;
    ex.className=tmp;
})