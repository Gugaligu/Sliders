let ex=document.getElementById("ex")
let D=new Date()
let Dayofnedel=D.getDay()
const btnnext=document.getElementById("btnnext")
const btnback=document.getElementById("btnback")
const daynames=["понедельник", "вторник", "среда", "четверг", "пятница", "суббота"]
let jsonData; // Переменная для хранения данных


// кнопки в слайдере
btnnext.addEventListener("click",function(){btn_slide(`next`,peremnedel);})
btnback.addEventListener("click",function(){btn_slide(`back`,peremnedel);})

// кнопки в scroll снизу(циферки)
document.getElementById("scroll-btn-1").addEventListener('click',function(){updatenedel(document.getElementById("scroll-btn-1").textContent)})
document.getElementById("scroll-btn-2").addEventListener('click',function(){updatenedel(document.getElementById("scroll-btn-2").textContent)})
document.getElementById("scroll-btn-3").addEventListener('click',function(){updatenedel(document.getElementById("scroll-btn-3").textContent)})
document.getElementById("scroll-btn-4").addEventListener('click',function(){updatenedel(document.getElementById("scroll-btn-4").textContent)})
document.getElementById("scroll-btn-5").addEventListener('click',function(){updatenedel(document.getElementById("scroll-btn-5").textContent)})

// кнопки в scroll снизу (стрелочки)
document.getElementById("scroll-btn-back").addEventListener('click',function(){slider_week_update(Number(document.getElementById("scroll-btn-3").textContent)-5)})
document.getElementById("scroll-btn-next").addEventListener('click',function(){slider_week_update(Number(document.getElementById("scroll-btn-3").textContent)+5)})




// текущая неделя
function getnedel() {
    const today = new Date();
    let year = today.getFullYear();
    const septemberFirst = new Date(year, 8, 1); 
    if (today < septemberFirst) {year -= 1;}
    const lastSeptemberFirst = new Date(year, 8, 1);
    const diffInMilliseconds = today - lastSeptemberFirst;
    let weeksPassed = Math.ceil(diffInMilliseconds / (1000 * 60 * 60 * 24 * 7));
    // if (Dayofnedel==0){weeksPassed+=1;}
    console.log(weeksPassed)
    return weeksPassed;
}
let teknedel=getnedel()
let peremnedel=getnedel()


// обновляет недели в полосе снизу
function slider_week_update(nedel){
    mass=[]
    for(var i=0;i<5;i++){
        n_nedel=nedel-2+i
        if (n_nedel<1){
            n_nedel=""
        }
        else if(n_nedel>45){
            n_nedel=""
        }
        mass.push(n_nedel)
        
    }
    document.querySelectorAll(".scroll-hide-weeks").forEach(function(el){
        el.classList.remove("scroll-hide-weeks")
        el.offsetWidth
        el.classList.add("scroll-hide-weeks")
    })
    document.getElementById("scroll-btn-1").textContent=`${mass.at(0)}`
    document.getElementById("scroll-btn-2").textContent=`${mass.at(1)}`
    document.getElementById("scroll-btn-3").textContent=`${mass.at(2)}`
    document.getElementById("scroll-btn-4").textContent=`${mass.at(3)}`
    document.getElementById("scroll-btn-5").textContent=`${mass.at(4)}`

}
slider_week_update(teknedel)

// инициализация дня
function DAYFUNC(){
    if(Dayofnedel==0){
        document.getElementById(`slide`).textContent=(daynames.at(0))+` ${peremnedel}`;
    }
    else if(Dayofnedel==6){
        document.getElementById(`slide`).textContent=(daynames.at(5))+` ${peremnedel}`;
        Dayofnedel--
    }
    else{
        document.getElementById(`slide`).textContent=(daynames.at(Dayofnedel-1))+` ${peremnedel}`;
        Dayofnedel--
    }
}
DAYFUNC()
