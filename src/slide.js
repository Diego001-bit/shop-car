const imagensslide =[{
    promocao:"imagens/i-por.jpg",
    id:"img1",
},{
    promocao:"",
    id:"img2",
},{
    promocao:"imagens/i-por.jpg",
    id:"img3",
},{
    promocao:"imagens/i-por.jpg",
    id:"img4",
}]

let eleImagem = [document.getElementById("img1"), document.getElementById("img2"), document.getElementById("img3"), document.getElementById("img4"),document.getElementById("img5")];
let ordem = -1;
export function passando(){

     for(let i =0;i<eleImagem.length;i++){
        eleImagem[i].style.display="none"

    }
    ordem =(ordem+1) % eleImagem.length
    eleImagem[ordem].style.display="flex" 
    eleImagem[ordem].style.backgroundImage=`url(${imagensslide[ordem].promocao})`
    }
setInterval(passando,4000)
