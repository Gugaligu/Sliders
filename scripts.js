let ex=document.getElementById("ex")
let inc=document.getElementById("inc")
let D=new Date()
let Dayofnedel=D.getDay()
let regulatorSlider=0
const btnnext=document.getElementById("btnnext")
const btnback=document.getElementById("btnback")
const daynames=["понедельник", "вторник", "среда", "четверг", "пятница", "суббота"]



function getnedel() {
    const today = new Date();
    let year = today.getFullYear();
    const septemberFirst = new Date(year, 8, 1); 
    if (today < septemberFirst) {year -= 1;}
    const lastSeptemberFirst = new Date(year, 8, 1);
    const diffInMilliseconds = today - lastSeptemberFirst;
    let weeksPassed = Math.ceil(diffInMilliseconds / (1000 * 60 * 60 * 24 * 7));
    if (Dayofnedel==0){weeksPassed+=1;}
    return weeksPassed;
}
let teknedel=getnedel()
let peremnedel=getnedel()

function DAYFUNC(){
    if(Dayofnedel==0){
        document.getElementById(`DAY1`).textContent=(daynames.at(0))+` ${peremnedel}`;
        console.log(Dayofnedel)
    }
    else if(Dayofnedel==6){
        document.getElementById(`DAY1`).textContent=(daynames.at(5))+` ${peremnedel}`;
        Dayofnedel--
    }
    else{
        document.getElementById(`DAY1`).textContent=(daynames.at(Dayofnedel-1))+` ${peremnedel}`;
        Dayofnedel--
    }
}
DAYFUNC()



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
    document.getElementById("scroll-btn-1").textContent=`${mass.at(0)}`
    document.getElementById("scroll-btn-2").textContent=`${mass.at(1)}`
    document.getElementById("scroll-btn-3").textContent=`${mass.at(2)}`
    document.getElementById("scroll-btn-4").textContent=`${mass.at(3)}`
    document.getElementById("scroll-btn-5").textContent=`${mass.at(4)}`

}
slider_week_update(teknedel)

function btn_slide(action,nedel){
    tmp_Dayofnedel_before=Dayofnedel%6
    if (action==`back`){Dayofnedel-=1;}
    else if(action==`next`){Dayofnedel+=1;}
    tmp_Dayofnedel_after=Dayofnedel%6
    regulatorSlider=!(regulatorSlider)

    if (tmp_Dayofnedel_before==5 && tmp_Dayofnedel_after==0 || tmp_Dayofnedel_before==-1 && tmp_Dayofnedel_after==0){
        nedel++
        peremnedel++}
    else if (tmp_Dayofnedel_before==0 && tmp_Dayofnedel_after==5 || tmp_Dayofnedel_before==0 && tmp_Dayofnedel_after==-1){
        nedel--
        peremnedel--
    }
    console.log(Dayofnedel)
    
    document.getElementById(`DAY${Number(!(regulatorSlider))}`).textContent=(daynames.at(Dayofnedel%6))+` ${nedel}`;
    let tmp=inc.className;
    inc.className=`${ex.className}`;
    ex.className=tmp;
}

function updatenedel(nedel){
    peremnedel=nedel
    btn_slide("",nedel)
    slider_week_update(nedel)
}


btnnext.addEventListener("click",function(){btn_slide(`next`,peremnedel);})
btnback.addEventListener("click",function(){btn_slide(`back`,peremnedel);})


document.getElementById("scroll-btn-1").addEventListener('click',function(){updatenedel(document.getElementById("scroll-btn-1").textContent)})
document.getElementById("scroll-btn-2").addEventListener('click',function(){updatenedel(document.getElementById("scroll-btn-2").textContent)})
document.getElementById("scroll-btn-3").addEventListener('click',function(){updatenedel(document.getElementById("scroll-btn-3").textContent)})
document.getElementById("scroll-btn-4").addEventListener('click',function(){updatenedel(document.getElementById("scroll-btn-4").textContent)})
document.getElementById("scroll-btn-5").addEventListener('click',function(){updatenedel(document.getElementById("scroll-btn-5").textContent)})