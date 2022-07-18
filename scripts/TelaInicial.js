
const Tela_inicial = document.querySelector('.tela-inicial');
const btPuxarMenu = document.querySelector('.puxar-menu');
const boxMenuHidem = document.querySelector('.Menu-hidem');
const subTelaConfig = document.querySelector('.subTelaConfig');
const botao_abrir_tela_config = document.getElementById("BtAbrirTela_configuracoes");

/* botoes abriar apps da tela de configuraçoes*/

const btTela = document.querySelector('.tela-opcoes');
const btArma = document.querySelector('.armazenamento');
const btBateria = document.querySelector('.bateriaconfig');
const btAssVirtual = document.querySelector('.ass-virtual');
const btConta = document.querySelector(".conta-usu");
const btSobre = document.querySelector('.sobre');

const BoxTela = document.querySelector('.subTelaTelaconfig');
const BoxTelaArmazena = document.querySelector('.subTelaarmazenamnetoconfig');
const BoxTelaBateria = document.querySelector('.subTelaBateriaconfig');
const BoxTelaAssistente = document.querySelector('.subTelaAssVirtualconfig');
const BoxTelaConta = document.querySelector('.subTelaContaconfig');
const BoxTelaSobre = document.querySelector('.subTelaSobreconfig');

btTela.addEventListener("click", ()=> abrindo_opcoes_tela_config());
btArma.addEventListener("click", ()=> abrindo_box_armazenamento());
btBateria.addEventListener("click", ()=> abrindo_box_bateria());
btAssVirtual.addEventListener("click", ()=> abrindo_box_assistente());
btConta.addEventListener("click", ()=> abrindo_box_conta());
btSobre.addEventListener("click", ()=> abrindo_box_sobre());




btDesblquear.addEventListener("click", ()=> verificador1());
btPuxarMenu.addEventListener("mouseover", ()=> AbrirMenuHidem());
botao_abrir_tela_config.addEventListener("click", ()=> Abrindo_AS_CONFIGURAÇOES());

function verificador1(){

    
    if(campoSenha2.innerText === confirmarSenhaUsu || inputSenha2.value === confirmarSenhaUsu){

        Tela_inicial.style.display = "block";
        Tela_de_Bloqueio.style.display = "none";
        btPuxarMenu.style.display = "block";
        btsNavegacao1.style.display = "none";
        btsNavegacao2.style.display = "flex";
        campoSenha2.innerText = "";
        inputSenha2.value = "";
        
    }else{

        alert("Senha Invalida");
        campoSenha2.style.border = "1px solid red";
        campoSenha2.innerText = "";

        setTimeout(()=>{

            campoSenha2.style.border = "none";

        },3000)
    }
}

const AbrirMenuHidem = () =>{

    boxMenuHidem.style.display = "block";

    setTimeout(()=>{

        boxMenuHidem.addEventListener("mouseout",()=> fecharMenuHidem());


    },50)
}


const fecharMenuHidem = () =>{

    boxMenuHidem.style.display = "none";
}

/* ABRINDO AS TELAS DOS APPS*/

const Abrindo_AS_CONFIGURAÇOES = () =>{

    subTelaConfig.style.display = "block";
    Tela_inicial.style.display = "none";
}


/* ABRINDO AS TELAS DAS OPCOES DA TEla DE CONFIGURAÇOES*/

const abrindo_opcoes_tela_config = () =>{

    BoxTela.style.display = "block";
    subTelaConfig.style.display = "none";
    btsNavegacao2.style.display = "none";
    btsNavegacao3.style.display = "flex";
}

const abrindo_box_armazenamento = () =>{

    BoxTelaArmazena.style.display = "block"
    subTelaConfig.style.display = "none";
    btsNavegacao2.style.display = "none";
    btsNavegacao3.style.display = "flex";
   
}

const abrindo_box_bateria = () =>{

    BoxTelaBateria.style.display = "block";
    subTelaConfig.style.display = "none";
    btsNavegacao2.style.display = "none";
    btsNavegacao3.style.display = "flex";
}

const abrindo_box_assistente = () =>{

    BoxTelaAssistente.style.display = "block";
    subTelaConfig.style.display = "none";
    btsNavegacao2.style.display = "none";
    btsNavegacao3.style.display = "flex";
   
}

const abrindo_box_conta = () =>{

    BoxTelaConta.style.display = "block";
    subTelaConfig.style.display = "none";
    btsNavegacao2.style.display = "none";
    btsNavegacao3.style.display = "flex";
}

const abrindo_box_sobre = () =>{

    BoxTelaSobre.style.display = "block";
    subTelaConfig.style.display = "none";
    btsNavegacao2.style.display = "none";
    btsNavegacao3.style.display = "flex";
   
}


// tela gamer e seus botoes

const TelaGame = document.querySelector('.Tela-box-games');
const BtabirTelaG = document.getElementById("btAbrirTelaGames");

BtabirTelaG.addEventListener("click", ()=> Abrindo_AS_tela_game());


const Abrindo_AS_tela_game = () =>{

    TelaGame.style.display = "block";
}


// abrindo os games

const btAbrirGame1 = document.getElementById("btAbrirGame1");
const btAbrirGame2 = document.getElementById("btAbrirGame2");

btAbrirGame1.addEventListener("click", ()=> AbrindoMario());
btAbrirGame2.addEventListener("click", ()=> AbrindoGamePou());

const TelaMario = document.querySelector('.abrindoGameMarioS');
const TelaPou = document.querySelector('.AbrindoGamePou');


const AbrindoMario = () =>{

    TelaMario.style.display = "block";
    Tela_inicial.style.display = "none";
    TelaGame.style.display = "none";
    TelaPou.style.display = "none";

}

const AbrindoGamePou = () =>{

    TelaPou.style.display = "block";
    Tela_inicial.style.display = "none";
    TelaGame.style.display = "none";
    TelaMario.style.display = "none";

}

// Tela de galeria e suas variaveis

const Tela_Galeria = document.querySelector('.Tela-Galeria');
const Carrossel_fotos = document.querySelector('.Carroessel-de-fotos');
const btAbrirCarrossel =  document.querySelector('.btcarro');
const btAbrirGaleria = document.getElementById("btAbrirGaleria");

btAbrirGaleria.addEventListener("click", () =>Abrindo_galeria());
btAbrirCarrossel.addEventListener("click", () => AbrindoCarrossel());


const Abrindo_galeria = () =>{

    Tela_Galeria.style.display = "block";
    Tela_inicial.style.display = "none";
}


const AbrindoCarrossel =() =>{

    Carrossel_fotos.style.display = "flex";
    Tela_Galeria.style.display = "none";
    btsNavegacao2.style.display = "none";
    btsNavegacao4.style.display = "flex"
}