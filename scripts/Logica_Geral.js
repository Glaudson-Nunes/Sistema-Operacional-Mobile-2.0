// LOGICA DO MENU HIDEM INICIO

const BtMoBlackDesa = document.getElementById("BTmodoBlackDesativado");
const BtMoBlackAti = document.getElementById("ativado-hidem");
const ColorParagraf = document.querySelectorAll('.text-config');
const ColorParagraf2 = document.querySelectorAll('.text-op');
const boxTelaAssis = document.querySelector('.box_msgs_assvt');
const btAjuste = document.getElementById("btAjuste");
const btBloquearTela = document.getElementById("btBloquearTela");



BtMoBlackDesa.addEventListener("click", ()=> ModoBlackOn());
BtMoBlackAti.addEventListener("click", () => ModoBlackOff());
btAjuste.addEventListener("click", ()=> AtalhoTelaConfig());
btBloquearTela.addEventListener("click", ()=> BloquearTela());

const ModoBlackOn = () =>{
    
    ColorParagraf.forEach((color)=>{

        color.style.color = "white";
    })

    ColorParagraf2.forEach((color)=>{

        color.style.color = "white";
    })

    BtMoBlackDesa.style.display = "none";
    BtMoBlackAti.style.display = "block";

    boxMenuHidem.style.backgroundColor = "rgb(14, 14, 14)";
    Tela_Galeria.style.backgroundColor = "rgb(14, 14, 14)";
    Carrossel_fotos.style.backgroundColor = "rgb(14, 14, 14)";
    Tela_BLOCO_de_notas.style.backgroundColor = "rgb(14, 14, 14)";
    TelaConversor.style.backgroundColor = "rgb(14, 14, 14)";
    TelaGame.style.backgroundColor = "rgb(14, 14, 14)";
    subTelaConfig.style.backgroundColor = "rgb(14, 14, 14)";
    BoxTelaAssistente.style.backgroundColor = "rgb(14, 14, 14)";
    boxTelaAssis.style.backgroundColor = "rgb(14, 14, 14)";
    boxTextSalvo.style.backgroundColor = "rgb(14, 14, 14)";
    InputBrilhoModoBlack.style.display = "block";
    InputVbrilho.style.display = "none";

    BoxTela.style.backgroundColor = "rgb(14, 14, 14)";
    BoxTelaArmazena.style.backgroundColor = "rgb(14, 14, 14)";
    BoxTelaBateria.style.backgroundColor = "rgb(14, 14, 14)";
    BoxTelaAssistente.style.backgroundColor = "rgb(14, 14, 14)";
    BoxTelaConta.style.backgroundColor = "rgb(14, 14, 14)";
    BoxTelaSobre.style.backgroundColor = "rgb(14, 14, 14)";


}


const ModoBlackOff = () =>{


    ColorParagraf.forEach((color)=>{

        color.style.color = "black";
    })

    ColorParagraf2.forEach((color)=>{

        color.style.color = "black";
    })

    BtMoBlackDesa.style.display = "block";
    BtMoBlackAti.style.display = "none";

    boxMenuHidem.style.backgroundColor = "#F3F1F5";
    Tela_Galeria.style.backgroundColor = " #dcdbdb";
    Carrossel_fotos.style.backgroundColor = "white";
    Tela_BLOCO_de_notas.style.backgroundColor = "rgb(238, 237, 237)";
    TelaConversor.style.backgroundColor = " rgb(238, 237, 237)";
    TelaGame.style.backgroundColor = "#dcdbdb";
    subTelaConfig.style.backgroundColor = "rgb(238, 237, 237)";
    BoxTelaAssistente.style.backgroundColor = "white";
    boxTelaAssis.style.backgroundColor = "white";
    boxTextSalvo.style.backgroundColor = " rgb(97, 89, 89)";

    BoxTela.style.backgroundColor = "rgb(238, 237, 237)";
    BoxTelaArmazena.style.backgroundColor = "rgb(238, 237, 237)";
    BoxTelaBateria.style.backgroundColor =  "rgb(238, 237, 237)";
    BoxTelaAssistente.style.backgroundColor =  "rgb(238, 237, 237)";
    BoxTelaConta.style.backgroundColor = "rgb(238, 237, 237)";
    BoxTelaSobre.style.backgroundColor = "rgb(238, 237, 237)";

    InputBrilhoModoBlack.style.display = "none";
    InputVbrilho.style.display = "block";
}


const AtalhoTelaConfig = () =>{

    subTelaConfig.style.display = "block";
    boxMenuHidem.style.display = "none";
    Tela_inicial.style.display = "none";  
    Tela_inicial.style.display = "none";
    boxMenuHidem.style.display = "none";
    Tela_Galeria.style.display = "none";
    Carrossel_fotos.style.display = "none";
    Tela_BLOCO_de_notas.style.display = "none";
    TelaConversor.style.display = "none";
    TelaGame.styledisplay = "none";
    BoxTelaAssistente.display = "none";
    TelaCalcu.style.display = "none";
    TelaGame.style.display = "none";
    TelaMario.style.display = "none";
    TelaPou.style.display = "none";
    BoxTela.style.display = "none";
    BoxTelaArmazena.style.display = "none";
    BoxTelaBateria.style.display = "none";
    BoxTelaAssistente.style.display = "none";
    BoxTelaConta.style.display = "none";
    BoxTelaSobre.style.display = "none";

    btsNavegacao4.style.display = "none";
    btsNavegacao2.style.display = "flex";
}

const BloquearTela = () =>{

    Tela_de_Bloqueio.style.display = "flex";

    Tela_inicial.style.display = "none";
    boxMenuHidem.style.display = "none";
    Tela_Galeria.style.display = "none";
    Carrossel_fotos.style.display = "none";
    Tela_BLOCO_de_notas.style.display = "none";
    TelaConversor.style.display = "none";
    TelaGame.styledisplay = "none";
    subTelaConfig.style.display = "none";
    BoxTelaAssistente.display = "none";
   
    boxMenuHidem.styledisplay = "none";
    TelaCalcu.style.display = "none";
    TelaGame.style.display = "none";
    TelaMario.style.display = "none";
    TelaPou.style.display = "none";
    btPuxarMenu.style.display = "none";

    BoxTela.style.display = "none";
    BoxTelaArmazena.style.display = "none";
    BoxTelaBateria.style.display = "none";
    BoxTelaAssistente.style.display = "none";
    BoxTelaConta.style.display = "none";
    BoxTelaSobre.style.display = "none";

    btsNavegacao1.style.display = "flex";
    btsNavegacao2.style.display = "none";
    btsNavegacao3.style.display = "none";
    btsNavegacao4.style.display = "none";
}// LOGICA DO MENU HIDEM FIM


// LOGICA DO BRILHO NA TELA INICIO
const InputVbrilho = document.querySelector('.inputBrilho');
const InputBrilhoModoBlack = document.querySelector('.inputBrilhoModoBlack');
const avisoBrilho = document.querySelector('.aviso');
const imgBrilhoMedio = document.getElementById("brilho-medio");
const imgBrilhoVazio = document.getElementById("brilho-vazio");
const imgBrilhoCheio = document.getElementById("brilho-cheio");

InputVbrilho.addEventListener("input", ()=> VericadorBrilhoInput());
InputBrilhoModoBlack.addEventListener("input", ()=> VericadorBrilhoInputBlack());

const VericadorBrilhoInput = () =>{


    if(InputVbrilho.value<=25){

        imgBrilhoVazio.style.display = "block";
        imgBrilhoMedio.style.display = "none";
        imgBrilhoCheio.style.display = "none";

        boxMenuHidem.style.backgroundColor = "rgb(208, 208, 208)";
        Tela_Galeria.style.backgroundColor = "rgb(208, 208, 208)";
        Carrossel_fotos.style.backgroundColor = "rgb(208, 208, 208)";
        Tela_BLOCO_de_notas.style.backgroundColor = "rgb(208,208,208)";
        TelaConversor.style.backgroundColor = " rgb(208, 208, 208)";
        TelaGame.style.backgroundColor = "rgb(208, 208, 208)";
        subTelaConfig.style.backgroundColor = "rgb(208, 208, 208)";
        BoxTelaAssistente.style.backgroundColor = "rgb(208,208,208)";
        boxTelaAssis.style.backgroundColor = "rgb(208,208,208)";
        boxTextSalvo.style.backgroundColor = " rgb(208,208,208)";
        BoxTela.style.backgroundColor = "rgb(208, 208, 208)";
        BoxTelaArmazena.style.backgroundColor = "rgb(208, 208, 208)";
        BoxTelaBateria.style.backgroundColor =  "rgb(208, 208,208)";
        BoxTelaAssistente.style.backgroundColor =  "rgb(208, 208, 208)";
        BoxTelaConta.style.backgroundColor = "rgb(208, 208, 208)";
        BoxTelaSobre.style.backgroundColor = "rgb(208, 208, 208)";
        Tela_inicial.style.backgroundImage = "linear-gradient(150deg, rgba(184, 3, 3, 0.458), rgba(2, 104, 2, 0.479), rgba(190, 190, 3, 0.534) )";

        ColorParagraf.forEach((color)=>{

            color.style.color = "rgba(0, 0, 0, 0.671)";
        })
    
        ColorParagraf2.forEach((color)=>{
    
            color.style.color = "rgba(0, 0, 0, 0.671)";
        })


    }else if(InputVbrilho.value>=70){

        imgBrilhoVazio.style.display = "none";
        imgBrilhoMedio.style.display = "none";
        imgBrilhoCheio.style.display = "block";
        boxMenuHidem.style.backgroundColor = "#ffffff";
        Tela_Galeria.style.backgroundColor = "#ffffff";
        Carrossel_fotos.style.backgroundColor = "rgb(255, 255, 255)";
        Tela_BLOCO_de_notas.style.backgroundColor = " rgb(255, 255, 255)";
        TelaConversor.style.backgroundColor = "rgb(255, 255, 255)";
        TelaGame.style.backgroundColor = "#ffffff";
        subTelaConfig.style.backgroundColor = "rgb(255, 255, 255)";
        BoxTelaAssistente.style.backgroundColor = "rgb(255, 255, 255)";
        boxTelaAssis.style.backgroundColor = "rgb(255,255,255)";
        boxTextSalvo.style.backgroundColor = " rgb(179, 166, 166)";
        BoxTela.style.backgroundColor = "rgb(255, 255, 255)";
        BoxTelaArmazena.style.backgroundColor = "rgb(255,255,255)";
        BoxTelaBateria.style.backgroundColor = "rgb(255,255,255)";
        BoxTelaAssistente.style.backgroundColor =  "rgb(255, 255, 255)";
        BoxTelaConta.style.backgroundColor = "rgb(255, 255, 255)";
        BoxTelaSobre.style.backgroundColor = "rgb(255, 255, 255)";
        Tela_inicial.style.backgroundImage = "linear-gradient(150deg, rgba(255, 4, 4, 0.912), rgba(7, 255, 7, 0.879), rgba(255, 255, 6, 0.868))";

        ColorParagraf.forEach((color)=>{

            color.style.color = "rgb(0, 0, 0)";
        })
    
        ColorParagraf2.forEach((color)=>{
    
            color.style.color = "rgb(0, 0, 0)";
        })

    }else if(InputVbrilho.value == 50){

        imgBrilhoVazio.style.display = "none";
        imgBrilhoMedio.style.display = "block";
        imgBrilhoCheio.style.display = "none";
        boxMenuHidem.style.backgroundColor = "#F3F1F5";
        Tela_Galeria.style.backgroundColor = "#dcdbdb";
        Carrossel_fotos.style.backgroundColor = "white";
        Tela_BLOCO_de_notas.style.backgroundColor = "rgb(238, 237, 237)";
        TelaConversor.style.backgroundColor = " rgb(238, 237, 237)";
        TelaGame.style.backgroundColor = "#dcdbdb";
        subTelaConfig.style.backgroundColor = "rgb(238, 237, 237)";
        BoxTelaAssistente.style.backgroundColor = "white"
        boxTelaAssis.style.backgroundColor = "white";
        boxTextSalvo.style.backgroundColor = " rgb(97, 89, 89)";
        BoxTela.style.backgroundColor = "rgb(238, 237, 237)";
        BoxTelaArmazena.style.backgroundColor = "rgb(238, 237, 237)";
        BoxTelaBateria.style.backgroundColor =  "rgb(238, 237, 237)";
        BoxTelaAssistente.style.backgroundColor =  "rgb(238, 237, 237)";
        BoxTelaConta.style.backgroundColor = "rgb(238, 237, 237)";
        BoxTelaSobre.style.backgroundColor = "rgb(238, 237, 237)";
        Tela_inicial.style.backgroundImage = "linear-gradient(150deg, rgba(255, 0, 0, 0.632), rgba(0, 128, 0, 0.675), rgba(255, 255, 0, 0.637) )";

        ColorParagraf.forEach((color)=>{

            color.style.color = "black";
        })
    
        ColorParagraf2.forEach((color)=>{
    
            color.style.color = "black";
        })

    }

}

const VericadorBrilhoInputBlack = () =>{


    if(InputBrilhoModoBlack.value<=25){

        imgBrilhoVazio.style.display = "block";
        imgBrilhoMedio.style.display = "none";
        imgBrilhoCheio.style.display = "none";

        boxMenuHidem.style.backgroundColor = "rgb(17, 17, 17)";
        Tela_Galeria.style.backgroundColor = "rgb(17, 17, 17)";
        Carrossel_fotos.style.backgroundColor = "rgb(17, 17, 17)";
        Tela_BLOCO_de_notas.style.backgroundColor = "rgb(17, 17, 17)";
        TelaConversor.style.backgroundColor = "rgb(17, 17, 17)";
        TelaGame.style.backgroundColor = "rgb(17, 17, 17)";
        subTelaConfig.style.backgroundColor = "rgb(17, 17, 17)";
        BoxTelaAssistente.style.backgroundColor = "rgb(17, 17, 17)";
        boxTelaAssis.style.backgroundColor = "rgb(17, 17, 17)";
        boxTextSalvo.style.backgroundColor = " rgb(17, 17, 17)";
        BoxTela.style.backgroundColor = "rgb(17, 17, 17)";
        BoxTelaArmazena.style.backgroundColor = "rgb(17, 17, 17)";
        BoxTelaBateria.style.backgroundColor =  "rgb(17, 17, 17)";
        BoxTelaAssistente.style.backgroundColor =  "rgb(17, 17, 17)";
        BoxTelaConta.style.backgroundColor = "rgb(17, 17, 17)";
        BoxTelaSobre.style.backgroundColor = "rgb(17, 17, 17)";
        Tela_inicial.style.backgroundImage = "linear-gradient(150deg, rgba(184, 3, 3, 0.458), rgba(2, 104, 2, 0.479), rgba(190, 190, 3, 0.534) )";

        ColorParagraf.forEach((color)=>{

            color.style.color = " rgba(222, 222, 222, 0.807)";
        })
    
        ColorParagraf2.forEach((color)=>{
    
            color.style.color = "rgba(222, 222, 222, 0.807)";
        })


    }else if(InputBrilhoModoBlack.value>=70){

        imgBrilhoVazio.style.display = "none";
        imgBrilhoMedio.style.display = "none";
        imgBrilhoCheio.style.display = "block";

        ColorParagraf.forEach((color)=>{

            color.style.color = "rgb(255, 255, 255)";
        })
    
        ColorParagraf2.forEach((color)=>{
    
            color.style.color = "rgb(255, 255, 255)";
        })

        boxMenuHidem.style.backgroundColor = "black";
        Tela_Galeria.style.backgroundColor = "black";
        Carrossel_fotos.style.backgroundColor = "black";
        Tela_BLOCO_de_notas.style.backgroundColor = "black";
        TelaConversor.style.backgroundColor = "black";
        TelaGame.style.backgroundColor = "black";
        subTelaConfig.style.backgroundColor = "black";
        BoxTelaAssistente.style.backgroundColor = "black";
        boxTelaAssis.style.backgroundColor = "black";
        boxTextSalvo.style.backgroundColor = "black";
        BoxTela.style.backgroundColor = "black";
        BoxTelaArmazena.style.backgroundColor = "black";
        BoxTelaBateria.style.backgroundColor =  "black";
        BoxTelaAssistente.style.backgroundColor =  "black";
        BoxTelaConta.style.backgroundColor = "black";
        BoxTelaSobre.style.backgroundColor = "black";
        Tela_inicial.style.backgroundImage = "linear-gradient(150deg, rgba(255, 4, 4, 0.912), rgba(7, 255, 7, 0.879), rgba(255, 255, 6, 0.868))"

    }else if(InputBrilhoModoBlack.value == 50){


        imgBrilhoVazio.style.display = "none";
        imgBrilhoMedio.style.display = "block";
        imgBrilhoCheio.style.display = "none";

        ColorParagraf.forEach((color)=>{

            color.style.color = "white";
        })
    
        ColorParagraf2.forEach((color)=>{
    
            color.style.color = "white";
        })

        boxMenuHidem.style.backgroundColor = "rgb(14, 14, 14)";
        Tela_Galeria.style.backgroundColor = "rgb(14, 14, 14)";
        Carrossel_fotos.style.backgroundColor = "rgb(14, 14, 14)";
        Tela_BLOCO_de_notas.style.backgroundColor = "rgb(14, 14, 14)";
        TelaConversor.style.backgroundColor = "rgb(14, 14, 14)";
        TelaGame.style.backgroundColor = "rgb(14, 14, 14)";
        subTelaConfig.style.backgroundColor = "rgb(14, 14, 14)";
        BoxTelaAssistente.style.backgroundColor = "rgb(14, 14, 14)";
        boxTelaAssis.style.backgroundColor = "rgb(14, 14, 14)";
        boxTextSalvo.style.backgroundColor = " rgb(14, 14, 14)";
        BoxTela.style.backgroundColor = "rgb(14, 14, 14)";
        BoxTelaArmazena.style.backgroundColor = "rgb(14, 14, 14)";
        BoxTelaBateria.style.backgroundColor =  "rgb(14, 14, 14)";
        BoxTelaAssistente.style.backgroundColor =  "rgb(14, 14, 14)";
        BoxTelaConta.style.backgroundColor = "rgb(14, 14, 14)";
        BoxTelaSobre.style.backgroundColor = "rgb(14, 14, 14)";
        Tela_inicial.style.backgroundImage = "linear-gradient(150deg, rgba(255, 0, 0, 0.632), rgba(0, 128, 0, 0.675), rgba(255, 255, 0, 0.637) )";
    }

}// LOGICA DO BRILHO NA TELA FIM


// LOGICA DA TELA INICIO, APLICAÇÂO DE TEMAS E FONTES

const Tema1 = document.querySelector('.yeelow');
const Tema2 = document.querySelector('.red');
const Tema3 = document.querySelector('.green');
const Tema4 = document.querySelector('.blue');
const Tema5 = document.querySelector('.white');
const Tema6 = document.querySelector('.rosa');
const Tema7 = document.querySelector('.preto');
const Tema_Padrâo = document.querySelector('.cinza');

Tema1.addEventListener("click", ()=> Aplicando_Tema1());
Tema2.addEventListener("click", ()=> Aplicando_Tema2());
Tema3.addEventListener("click", ()=> Aplicando_Tema3());
Tema4.addEventListener("click", ()=> Aplicando_Tema4());
Tema5.addEventListener("click", ()=> Aplicando_Tema5());
Tema6.addEventListener("click", ()=> Aplicando_Tema6());
Tema7.addEventListener("click", ()=> Aplicando_Tema7());
Tema_Padrâo.addEventListener("click", ()=> Aplicando_Tema_Padrâo());

const Aplicando_Tema1 = () =>{

    alert("Tema Amarelo Aplicado");

    if(InputBrilhoModoBlack.value<=25 || InputVbrilho.value<=25){

        Tela_inicial.style.backgroundColor = " rgba(217, 217, 7, 0.94)";

    }else if(InputBrilhoModoBlack.value >=70 || InputVbrilho.value>=70){

        Tela_inicial.style.backgroundColor = "rgb(255, 255, 0)";
     
    }else if(InputBrilhoModoBlack.value ==50 || InputVbrilho.value == 50){

        Tela_inicial.style.backgroundColor = " rgba(225, 225, 12, 0.951)";
    }

}

const Aplicando_Tema2 = () =>{

    alert("Tema Vermelho Aplicado");

    if(InputBrilhoModoBlack.value<=25 || InputVbrilho.value<=25){

        Tela_inicial.style.backgroundColor = "rgba(168, 24, 24, 0.89)";

    }else if(InputBrilhoModoBlack.value >=70 || InputVbrilho.value>=70){

        Tela_inicial.style.backgroundColor = "rgb(255, 0, 0)";
     
    }else if(InputBrilhoModoBlack.value ==50 || InputVbrilho.value == 50){

        Tela_inicial.style.backgroundColor = " rgba(222, 11, 11, 0.797)";
    }

    
}

const Aplicando_Tema3 = () =>{

    alert("Tema Verde Aplcado")

    if(InputBrilhoModoBlack.value<=25 || InputVbrilho.value<=25){

        Tela_inicial.style.backgroundColor = "rgba(4, 103, 4, 0.863)";

    }else if(InputBrilhoModoBlack.value >=70 || InputVbrilho.value>=70){

        Tela_inicial.style.backgroundColor = "rgb(0, 255, 0)";
     
    }else if(InputBrilhoModoBlack.value ==50 || InputVbrilho.value == 50){

        Tela_inicial.style.backgroundColor = "green";
    }

}

const Aplicando_Tema4 = () =>{

    alert("Tema Azul Aplicado")

    if(InputBrilhoModoBlack.value<=25 || InputVbrilho.value<=25){

        Tela_inicial.style.backgroundColor = "rgba(12, 12, 157, 0.786)";

    }else if(InputBrilhoModoBlack.value >=70 || InputVbrilho.value>=70){

        Tela_inicial.style.backgroundColor = "rgb(0, 0, 255)";
     
    }else if(InputBrilhoModoBlack.value ==50 || InputVbrilho.value == 50){

        Tela_inicial.style.backgroundColor = "blue";
    }
    
}

const Aplicando_Tema5 = () =>{

    alert("Tema Branco Aplicado")

    if(InputBrilhoModoBlack.value<=25 || InputVbrilho.value<=25){

        Tela_inicial.style.backgroundColor = "rgba(222, 222, 222, 0.807)";

    }else if(InputBrilhoModoBlack.value >=70 || InputVbrilho.value>=70){

        Tela_inicial.style.backgroundColor = " rgba(255, 255, 255)";
     
    }else if(InputBrilhoModoBlack.value ==50 || InputVbrilho.value == 50){

        Tela_inicial.style.backgroundColor = "white";
    }
    
}

const Aplicando_Tema6 = () =>{

    alert("Tema Rosa Aplicado")

    if(InputBrilhoModoBlack.value<=25 || InputVbrilho.value<=25){

        Tela_inicial.style.backgroundColor = "rgba(193, 156, 162, 0.94)";

    }else if(InputBrilhoModoBlack.value >=70 || InputVbrilho.value>=70){

        Tela_inicial.style.backgroundColor = "rgb(255, 171, 185)";
     
    }else if(InputBrilhoModoBlack.value ==50 || InputVbrilho.value == 50){

        Tela_inicial.style.backgroundColor = " rgb(255, 162, 178)";
    }
    
}

const Aplicando_Tema7 = () =>{

    alert("Tema Black Aplicado")

    if(InputBrilhoModoBlack.value<=25 || InputVbrilho.value<=25){

        Tela_inicial.style.backgroundColor = " rgba(0, 0, 0, 0.836)";

    }else if(InputBrilhoModoBlack.value >=70 || InputVbrilho.value>=70){

        Tela_inicial.style.backgroundColor = "black";
     
    }else if(InputBrilhoModoBlack.value ==50 || InputVbrilho.value == 50){

        Tela_inicial.style.backgroundColor = "black";
    }
    
}

const Aplicando_Tema_Padrâo= () =>{

    Tela_inicial.style.backgroundColor = "none";
    alert("Tema Padrâo Aplicado");
    Tela_inicial.style.backgroundImage = "linear-gradient(150deg, rgba(255, 0, 0, 0.632), rgba(0, 128, 0, 0.675), rgba(255, 255, 0, 0.637) )";

}// LOGICA DA TELA INICIO, APLICAÇÂO DE TEMAS E FONTES FIM



// LOGICA APLICANDO AS FONTES INICIO
const Franklin = document.getElementById("font1");
const LucidaSans = document.getElementById("font2");
const TimesNewRoman = document.getElementById("font3");
const system_ui_apple_system = document.getElementById("font4");
const monospace = document.getElementById("font5");
const  Impact = document.getElementById("font6");
const Padrâo_do_sistema = document.getElementById("font7");
const fontTelaIni = document.querySelector('.fontAlt');

Franklin.addEventListener("click",()=> fonte1());
LucidaSans.addEventListener("click",()=> fonte2());
TimesNewRoman.addEventListener("click", ()=> fonte3());
system_ui_apple_system.addEventListener("click",()=> fonte4());
monospace.addEventListener("click",()=> fonte5());
Impact.addEventListener("click",()=> fonte6());
Padrâo_do_sistema.addEventListener("click", ()=> fonte7());


const fonte1 = () =>{

    alert("Fonte Franklin Gothic Medium: Aplicada");

    ColorParagraf.forEach((color)=>{

        color.style.fontFamily = "Franklin Gothic Medium";
    })

    ColorParagraf2.forEach((color)=>{

        color.style.fontFamily = "Franklin Gothic Medium";
        
    })

    fontTelaIni.forEach((color)=>{

        color.style.fontFamily = "Franklin Gothic Medium";

    })
}

const fonte2 = () =>{

    alert("Fonte Lucida Sans: Aplicada");

    ColorParagraf.forEach((color)=>{

        color.style.fontFamily = "Lucida Sans";
    })

    ColorParagraf2.forEach((color)=>{

        color.style.fontFamily = "Lucida Sans";
        
    })

    fontTelaIni.forEach((color)=>{

        color.style.fontFamily = "Lucida Sans";

    })
}

const fonte3 = () =>{

    alert("Fonte Times New Roman: Aplicada");

    ColorParagraf.forEach((color)=>{

        color.style.fontFamily = "Times New Roman";
    })

    ColorParagraf2.forEach((color)=>{

        color.style.fontFamily = "Times New Roman";
        
    })

    fontTelaIni.forEach((color)=>{

        color.style.fontFamily = "Times New Roman";

    })
}

const fonte4 = () =>{

    alert("Fonte system-ui, -apple-system: Aplicada");

    ColorParagraf.forEach((color)=>{

        color.style.fontFamily = "system-ui, -apple-system";
    })

    ColorParagraf2.forEach((color)=>{

        color.style.fontFamily = "system-ui, -apple-system";
        
    })

    fontTelaIni.forEach((color)=>{

        color.style.fontFamily = "system-ui, -apple-system";

    })
    
}

const fonte5 = () =>{

    alert("Fonte monospace: Aplicada");

    ColorParagraf.forEach((color)=>{

        color.style.fontFamily = "monospace";
    })

    ColorParagraf2.forEach((color)=>{

        color.style.fontFamily = "monospace";
        
    })

    fontTelaIni.forEach((color)=>{

        color.style.fontFamily = "monospace";

    })
    
}

const fonte6 = () =>{

    alert("Fonte Impact: Aplicada");

    ColorParagraf.forEach((color)=>{

        color.style.fontFamily = "Impact";
    })

    ColorParagraf2.forEach((color)=>{

        color.style.fontFamily = "Impact";
        
    })

    fontTelaIni.forEach((color)=>{

        color.style.fontFamily = "Impact";

    })
    
}

const fonte7 = () =>{

    alert("Fonte padrâo: Aplicada");

    ColorParagraf.forEach((color)=>{

        color.style.fontFamily = "Anek Malayalam";
    })

    ColorParagraf2.forEach((color)=>{

        color.style.fontFamily = "Anek Malayalam";
        
    })

    fontTelaIni.forEach((color)=>{

        color.style.fontFamily = "Anek Malayalam";

    })
    
}// LOGICA APLICANDO AS FONTES FIM


// LOGICA APLICANDO TAMANHO DA FONTE INICO
const inputAlteTamanho = document.querySelector('.inputFont');

inputAlteTamanho.addEventListener("input", ()=> VerificarInputTamanho());


const VerificarInputTamanho = () =>{

    if(inputAlteTamanho.value>=70){

        FonteGrande();

    }else if(inputAlteTamanho.value == 50){

        FontePadrâo();

    }else if(inputAlteTamanho.value <30){

        FontePequena();
    }

    console.log(inputAlteTamanho.value);
}


const FonteGrande = () =>{

    ColorParagraf.forEach((color)=>{

        color.style.fontSize = "1.6rem";
    })

    ColorParagraf2.forEach((color)=>{

        color.style.fontSize = "1.3rem";
        
    })

    fontTelaIni.forEach((color)=>{

        color.style.fontSize = "1.5rem";

    })

}

const FontePadrâo = () =>{

    ColorParagraf.forEach((color)=>{

        color.style.fontSize = "1.1rem";
    })

    ColorParagraf2.forEach((color)=>{

        color.style.fontSize = "0.9rem";
        
    })

    fontTelaIni.forEach((color)=>{

        color.style.fontSize = "1rem";

    })


}

const FontePequena = () =>{

    ColorParagraf.forEach((color)=>{

        color.style.fontSize = "0.9rem";
    })

    ColorParagraf2.forEach((color)=>{

        color.style.fontSize = "0.7rem";
        
    })

    fontTelaIni.forEach((color)=>{

        color.style.fontSize = "0.6rem";

    })

} // LOGICA APLICANDO TAMANHO DA FONTE FIM


// LOGICA APLICANDO TAMANHO NOS ICONES INICIO

const IconsApps = document.querySelector('.imgApp');
const IconsOpcoes = document.querySelector('.imgopcoes');

const IconP = document.getElementById("padrao");
const IconM = document.getElementById("TM");
const IconG = document.getElementById("TG");

IconP.addEventListener("click", ()=> IconsPadrâo());
IconM.addEventListener("click", ()=> IconsMedio());
IconG.addEventListener("click", ()=> IconsGrande());

const IconsPadrâo = () =>{

    alert("Aplicado");
    IconsApps.style.width = "45px";
    IconsOpcoes.style.width = "50px";

}

const IconsMedio = () =>{

    alert("Aplicado");
    IconsApps.style.width = "50px";
    IconsOpcoes.style.width = "55px";

}


const IconsGrande = () =>{

    alert("Aplicado");
    IconsApps.style.width = "55px";
    IconsOpcoes.style.width = "60px";

} // LOGICA APLICANDO TAMANHO NOS ICONES FIM





// LOGICA DA GALERIA APLICANDO FOTOS A TELA DE BLOQUEIO
const addfoto2 = document.getElementById("addFT2");
const addfoto3 = document.getElementById("addFT3");
const addfoto4 = document.getElementById("addFT4");
const addfoto5 = document.getElementById("addFT5");
const addfoto6 = document.getElementById("addFT6");
const addfoto7 = document.getElementById("addFT7");

addfoto2.addEventListener("click", ()=> fotoPapel1());
addfoto3.addEventListener("click", ()=> fotoPapel2());
addfoto4.addEventListener("click", ()=> fotoPapel3());
addfoto5.addEventListener("click", ()=> fotoPapel4());
addfoto6.addEventListener("click", ()=> fotoPapel5());
addfoto7.addEventListener("click", ()=> fotoPapel7());


const fotoPapel1 = () =>{

    alert("Aplicado a tela de bloqueio");
    Tela_de_Bloqueio.style.backgroundImage = 'URL(img/fotos-galeria/foto6.jpg)';
    Tela_de_Bloqueio.style.backgroundSize = "360px";
}

const fotoPapel2 = () =>{

    alert("Aplicado a tela de bloqueio");
    Tela_de_Bloqueio.style.backgroundImage = 'URL(img/fotos-galeria/nasa1.png)';
    Tela_de_Bloqueio.style.backgroundSize = "360px";
}

const fotoPapel3 = () =>{

    alert("Aplicado a tela de bloqueio");

    Tela_de_Bloqueio.style.backgroundImage = 'URL(img/fotos-galeria/nasa2.png)';
    Tela_de_Bloqueio.style.backgroundSize = "360px";
}

const fotoPapel4 = () =>{

    alert("Aplicado a tela de bloqueio");

    Tela_de_Bloqueio.style.backgroundImage = 'URL(img/fotos-galeria/nasa3.jpg)';
    Tela_de_Bloqueio.style.backgroundSize = "360px";
}

const fotoPapel5 = () =>{

    alert("Aplicado a tela de bloqueio");

    Tela_de_Bloqueio.style.backgroundImage = 'URL(img/fotos-galeria/nasa4.png)';
    Tela_de_Bloqueio.style.backgroundSize = "360px";
}

const fotoPapel6 = () =>{

    alert("Aplicado a tela de bloqueio");

    Tela_de_Bloqueio.style.backgroundImage = 'URL(img/fotos-galeria/nasa5.png)';
    Tela_de_Bloqueio.style.backgroundSize = "360px";
}

const fotoPapel7 = () =>{

    alert("Aplicado a tela de bloqueio");

    Tela_de_Bloqueio.style.backgroundImage = 'URL(img/fotos-galeria/nasa5.png)';
    Tela_de_Bloqueio.style.backgroundSize = "360px";

} // LOGICA DA GALERIA APLICANDO FOTOS A TELA DE BLOQUEIO FIM



// INICIO BOX FORMATAR O SISTEMA

const btformatar = document.getElementById("none");

const BtFormatar = document.getElementById("Bt-formatar");

BtFormatar.addEventListener("click", ()=> Formatando_sistema_operacional());


const Formatando_sistema_operacional = () =>{
    
    var redefinir =confirm("Deseja Realmente formatar o sistema.");

if (redefinir == true){

    location.reload();
    localStorage.clear();
    alert("Sistema Operacional formatado com sucesso");
  
}
else{

}

}

// DADOS DO USUARIO TELA CONTA

var nome_conta = document.getElementById("N-u");
var numero_conta = document.getElementById("Numero_us");
var senhaatual = document.getElementById("s-atual");

nome_conta.innerHTML = `${NomeUsu}`;
numero_conta.innerHTML = `${NumeroUsu}`;
senhaatual.innerHTML = `${confirmarSenhaUsu}`;


// CLIMA EM TEMPO REAL

const api = {
    key: "64ed82577ced7f69cb1687f0ce536131",
    base: "https://api.openweathermap.org/data/2.5/",
    lang: "pt_br",
    units: "metric"
}

const city = document.querySelector('.city')
const date = document.querySelector('.date');
const container_img = document.querySelector('.container-img');
const container_temp = document.querySelector('.container-temp');
const temp_number = document.querySelector('.container-temp div');
const temp_unit = document.querySelector('.container-temp span');
const weather_t = document.querySelector('.weather');
const search_input = document.querySelector('.form-control');
const search_button = document.querySelector('.btn');
const low_high = document.querySelector('.low-high');

window.addEventListener('load', () => {
    //if ("geolocation" in navigator)
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(setPosition, showError);
    }
    else {
        alert('navegador não suporta geolozalicação');
    }
    function setPosition(position) {
        console.log(position)
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        coordResults(lat, long);
    }
    function showError(error) {
        alert(`erro: ${error.message}`);
    }
})

function coordResults(lat, long) {
    fetch(`${api.base}weather?lat=${lat}&lon=${long}&lang=${api.lang}&units=${api.units}&APPID=${api.key}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`http error: status ${response.status}`)
            }
            return response.json();
        })
        .catch(error => {
            alert(error.message)
        })
        .then(response => {
            displayResults(response)
        });
}



function searchResults(city) {
    fetch(`${api.base}weather?q=${city}&lang=${api.lang}&units=${api.units}&APPID=${api.key}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`http error: status ${response.status}`)
            }
            return response.json();
        })
        .catch(error => {
            alert(error.message)
        })
        .then(response => {
            displayResults(response)
        });
}

function displayResults(weather) {
    console.log(weather)

    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let now = new Date();
    date.innerText = dateBuilder(now);

    low_high.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
}

function dateBuilder(d) {
    let days = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    let months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julio", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    let day = days[d.getDay()]; //getDay: 0-6
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${date} ${month} ${year}`;
}

// HORA EM TEMPO REAL

const ht = document.querySelectorAll('.horasreal');


const relogio = () =>{

    var date = new Date();
    var hr = date.getHours();
    var min = date.getMinutes();
    var s = date.getSeconds();
    var tempo_total = hr + ":" + min + ":"+s;
    
    ht.forEach((horas)=>{
        horas.innerHTML = `${tempo_total}`;
    })
}

setInterval(relogio,1000);


// SISTEMA DE BATERIA

const bateriaAnimaçao = () =>{

    
}