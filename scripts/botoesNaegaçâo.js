
const btsNavegacao1 = document.querySelector('.botoes-nav1');
const btsNavegacao2 = document.querySelector('.botoesnav2');
const btsNavegacao3 = document.querySelector('.botoesnav3');
const btsNavegacao4 = document.querySelector('.botoesnav4');



btsNavegacao1.addEventListener("click", () => VoltarTelaConfiguraçoes());
btsNavegacao2.addEventListener("click", ()=> VoltarTelaInicial_Universal());
btsNavegacao3.addEventListener("click", ()=> voltarTelaAppConfiguracoes());
btsNavegacao4.addEventListener("click", ()=> voltarTelaGaleria());

const VoltarTelaConfiguraçoes = () =>{

    tela_configurar.style.display = "block";
    Tela_de_Bloqueio.style.display = "none";
    subTelaConfig.style.display = "none";
    BoxTela.style.display = "none";

}

const VoltarTelaInicial_Universal =() =>{ /* todas as subtelas dos apps devem ficar none aqui*/

    Tela_inicial.style.display = "block";
    subTelaConfig.style.display = "none";
    Tela_BLOCO_de_notas.style.display = "none";
    TelaCalcu.style.display = "none";
    TelaConversor.style.display = "none";
    TelaGame.style.display = "none";
    TelaMario.style.display = "none";
    TelaPou.style.display = "none";
    Tela_Galeria.style.display = "none";
}

const voltarTelaAppConfiguracoes = () =>{/* todas as subtelas das subtelas de configuraçoes devem ficar aqui como none*/

    BoxTela.style.display = "none";
    subTelaConfig.style.display = "block";
    btsNavegacao3.style.display = "none";
    btsNavegacao2.style.display = "flex";
    BoxTelaArmazena.style.display = "none"
    BoxTelaAssistente.style.display = "none";
    BoxTelaBateria.style.display = "none";
    BoxTelaConta.style.display = "none";
    BoxTelaSobre.style.display = "none";
}



const voltarTelaGaleria = () =>{

    Carrossel_fotos.style.display = "none";
    Tela_Galeria.style.display = "block";
    btsNavegacao2.style.display = "flex";
    btsNavegacao4.style.display = "none"
}