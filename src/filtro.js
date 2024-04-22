let filt = document.getElementById("ativarfiltro")
let pagfiltro = document.getElementById("filtro")
filt.addEventListener("click",divisor)

export function divisor(){
    if(pagfiltro.style.left=='-280px'){
    pagfiltro.style.left='0px'
    }else{
    pagfiltro.style.left='-280px'
    }
}
