let botao = [document.getElementById("menu-bars"),document.getElementById("menu-bars2")]
botao[0].addEventListener('click',burgopen)
botao[1].addEventListener('click',burgclose)
let aba= document.getElementById("burg-menu")

export function burgopen(){
    if(aba.style.right == '-300px'){
        aba.style.right ='0px'
        botao[0].style.color="transparent"
    }else{
        aba.style.right='-300px'
    }
}
export function burgclose(){
    if(aba.style.right == '0px'){
        botao[0].style.color="white"
        aba.style.right='-300px'
    }else{

        aba.style.right ='0px'
    }
}

