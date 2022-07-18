const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const gameOver = document.querySelector('.game-over');
const BtReiniciar = document.querySelector('.reiniciar');
const TelaGameOver = document.querySelector('.Game_ouver');
const TelaGamer = document.querySelector('.Tela-game');
const nuvems = document.querySelector('.nuvens');

BtReiniciar.addEventListener("click", ()=> Reiniciar());

document.addEventListener('click', ()=>{

    mario.classList.add('PuloClicado');

    setTimeout(()=>{

        mario.classList.remove('PuloClicado');

    },500),

    setTimeout(()=>{

        AumentarVelocidade();
        MudançaDeClima();

    },6000)
})

const Loop = setInterval(()=>{

    const PipePosition =  pipe.offsetLeft;
    const MarioPosition = +window.getComputedStyle(mario).bottom.replace('px','');


    if(PipePosition<= 80 && PipePosition >0 && MarioPosition <80){

        pipe.style.animation = 'none';
        pipe.style.left = "80px"
        mario.style.display = "none";
        gameOver.style.display = "block";
        TelaGameOver.style.display = "flex";

    }


},10)


const Reiniciar = () =>{

location.reload();

}

const MudançaDeClima = () =>{

TelaGamer.classList.add('Tela-game_Noite');
nuvems.style.display = "none";
}

const AumentarVelocidade = () =>{

   pipe.style.animationDuration = '1s';

}