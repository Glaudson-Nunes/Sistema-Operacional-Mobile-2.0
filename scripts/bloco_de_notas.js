
const BtAbrirTelaLista = document.getElementById("btAbrirTelaLista");
const Tela_BLOCO_de_notas = document.querySelector('.telaListaeTarefas');
const btconta = document.getElementById("btCC");
const boxAnotacao = document.querySelector('.anotaçaoSalva');
const inputB = document.querySelector('.inputTextB');
const boxTextSalvo = document.querySelector('.anotaçaoSalva');

BtAbrirTelaLista.addEventListener("click", ()=> Abrindo_tela_bloco());
btconta.addEventListener("click", ()=> SalvandoText());


const Abrindo_tela_bloco = ()=>{

    Tela_BLOCO_de_notas.style.display = "block";
    Tela_inicial.style.display = "none";

}


const SalvandoText = () =>{

   localStorage.setItem("textSalvo", boxAnotacao.innerHTML += `<p> ${inputB.value}</p>`);
   inputB.classList.add('text-config');
   boxTextSalvo.style.color = "white";

}


onload = function textoSalvo(){

    var textoS = localStorage.getItem("textSalvo");
    boxAnotacao.innerHTML = textoS;
}


