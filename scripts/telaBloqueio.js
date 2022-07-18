/* VARIAVEIS DA TELA DE BLOQUEIO*/

const inputSenha2 = document.querySelector('.inputSenha2');
const campoSenha2 = document.querySelector('.campoSenha2');
const btAndroid = document.getElementById("androidButton");
const TelaAssistenteVirtual = document.querySelector('.box-assistente');
const receber_name_usu = document.getElementById("receber_nome_usu");
const btVoltarTelaConfig = document.getElementById("voltarTelaConfig");
const btdesativarTeclado = document.querySelector('.desativer_teclado');
const btAtivarTeclado = document.querySelector('.ativar_teclado');
const btDesblquear = document.querySelector('.desbloquear');


btAndroid.addEventListener("click", ()=> AbrirBoxAssistenteVirtual());
TelaAssistenteVirtual.addEventListener("mouseout", ()=> ocultarAssistenteViirtual());
btdesativarTeclado.addEventListener("click", ()=> DesativandoTeclado());
btAtivarTeclado.addEventListener("click", ()=> AtivarTeclado());

const Tela_de_Bloqueio = document.querySelector('.tela-bloqueio');
/* TECLADO DA TELA DE BLOQUEIO*/

const ocultarAssistenteViirtual = () =>{

    TelaAssistenteVirtual.style.display = "none";

    setTimeout(()=>{

        Tela_de_Bloqueio.addEventListener("mouseout", ()=> ocultarAssistenteViirtual());
        TelaAssistenteVirtual.addEventListener("mouseover", ()=> AbrirBoxAssistenteVirtual());

    },20);

}

const AbrirBoxAssistenteVirtual = () =>{

    TelaAssistenteVirtual.style.display = "block";
    receber_name_usu.innerHTML = `${NomeUsu}`;

}

const TelaBloqueioAcesso = () =>{

    Tela_de_Bloqueio.style.display = "flex";
}

const TelaBloqueioAcessoDireto = () =>{

    Tela_de_Bloqueio.style.display = "flex";
    tela_configurar.style.display = "none";
}
 

const DesativandoTeclado =() =>{

    alert("Teclado Virtual desativado");

    Teclado1.style.display = "none";
    Teclado2.style.display = "none";
    campoSenha2.style.display = "none";
    inputSenha2.style.display = "block";
    btdesativarTeclado.style.display = "none";
    btAtivarTeclado.style.display = "block";
    btAtivarTeclado.style.marginLeft = "20px";
    Tela_de_Bloqueio.style.textalign = "center";
    btDesblquear.style.display = "block";
}


const AtivarTeclado = () =>{

    alert("Tecaldo Virtual Ativado");

    Teclado1.style.display = "block";
    campoSenha2.style.display = "block";
    inputSenha2.style.display = "none";
    btdesativarTeclado.style.display = "block";
    btdesativarTeclado.style.marginLeft = "20px";
    btAtivarTeclado.style.display = "none"
    Tela_de_Bloqueio.style.textalign = "center";
    btDesblquear.style.display = "none";
}