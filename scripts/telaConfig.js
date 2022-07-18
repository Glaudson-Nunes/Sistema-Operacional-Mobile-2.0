/* VARIAVEIS DA TELA DE CONFIGURAÇÂO*/

const Nome = document.querySelector('.Nome_usuario1');
const Numero = document.querySelector('.Numero_Usuario');
const Senha1 = document.querySelector('.Senha1');
const Confim_senha = document.querySelector('.confrimar_Senha');
const BtConfirmar = document.querySelector('.verificar_conta');
const BtConfirmarHabilitado = document.querySelector('.btHabilitado');
const bConta = document.querySelector('.btConta');
const erro_senhas = document.querySelector('.erro-SENHAS');

const tela_configurar = document.querySelector('.tela-configurar');
const tela_load = document.querySelector('.TelaLoader');

bConta.addEventListener("click", ()=> TelaBloqueioAcessoDireto());
BtConfirmarHabilitado.addEventListener("click", ()=>  SalvandoDados());
Confim_senha.addEventListener("input", ()=> verificarInput());

const SalvandoDados = () =>{

    tela_load.style.display = "flex";
    tela_configurar.style.display = "none";


    setTimeout(()=>{

    if(Senha1.value === Confim_senha.value){

        localStorage.setItem("Nome_do_Usuario", Nome.value);
        localStorage.setItem("Numero_do_Usuario", Numero.value);
        localStorage.setItem("Senha1_do_usuario", Senha1.value);
        localStorage.setItem("Confirmar_Senha_usuario", Confim_senha.value);
        tela_configurar.style.display = "none";
        alert("Conta Criada com sucesso");
        location.reload(); 
    }else{
    
        Senha1.style.border = "1px solid red";
        Confim_senha.style.border = "1px solid red";
        Senha1.value = "";
        Confim_senha.value = "";
        BtConfirmar.classList.remove('btHabilitado');
        BtConfirmar.classList.add('verificar_conta');
        BtConfirmar.setAttribute('disabled','verificar_conta');
        alert("As senhas nâo correspondem");
    }
        tela_load.style.display = "none";
        location.reload();
        
    },8000)
           
}
const verificarInput = () =>{

    if(Senha1.value.length>= 4 && Confim_senha.value.length>= 4){

       BtConfirmar.classList.remove('verificar_conta');
       BtConfirmar.classList.add('btHabilitado');
       BtConfirmar.removeAttribute('disabled', '.verificar_conta');
        
    }else{

        BtConfirmar.classList.remove('btHabilitado');
        BtConfirmar.classList.add('verificar_conta');
        BtConfirmar.setAttribute('disabled','verificar_conta');
    }
}


/* DADOS DA CONTA DO USUARIO SALVOS*/

var NomeUsu = localStorage.getItem("Nome_do_Usuario");
var NumeroUsu = localStorage.getItem("Numero_do_Usuario");
var Senha1Usu = localStorage.getItem("Senha1_do_usuario");
var confirmarSenhaUsu = localStorage.getItem("Confirmar_Senha_usuario");

console.log(NomeUsu,NumeroUsu,Senha1Usu,confirmarSenhaUsu);
