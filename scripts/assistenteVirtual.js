
const nome_usuaAss = document.getElementById("nome_usu2");
const InputMsg = document.querySelector('.inputMsg');
const BtMsg = document.querySelector('.btmsg');
const Nome_dialUsu = document.querySelectorAll('.Nome_dia');

nome_usuaAss.innerHTML = `${NomeUsu}`;
BtMsg.addEventListener("click", ()=> Respostas_Assistente());

Nome_dialUsu.forEach((resp)=>{

    resp.innerHTML = `${NomeUsu}`;
})

// RESPOSTAS-1 DO ASSISTENTE VIRTUAL

const resp1 = document.querySelector('.resposta1');
const resp2 = document.querySelector('.resposta2');
const resp3 = document.querySelector('.resposta3');
const resp4 = document.querySelector('.resposta4');
const resp5 = document.querySelector('.resposta5');
const resp6 = document.querySelector('.resposta6');
const resp7 = document.querySelector('.resposta7');
const resp8 = document.querySelector('.resposta8');

const Dial1 = document.querySelector('.Dialogo1');
const Dial2 = document.querySelector('.Dialogo2');
const Dial3 = document.querySelector('.Dialogo3');
const Dial4 = document.querySelector('.Dialogo4');
const Dial5 = document.querySelector('.Dialogo5');
const nentendida = document.querySelector('.nao-entendida');



const Respostas_Assistente = () =>{

   if(InputMsg.value == 1){

    setTimeout(()=>{

        resp1.style.display = "flex";
        InputMsg.value = "";

    },800)
   
   } 

   if(InputMsg.value == 2){

    setTimeout(()=>{

        resp2.style.display = "flex";
        InputMsg.value = "";

    },800)

   }

   if(InputMsg.value ==3){

    setTimeout(()=>{

        resp3.style.display = "flex";
        InputMsg.value = "";

    },800)

   }

   if(InputMsg.value == 4){

    setTimeout(()=>{

        resp4.style.display = "flex";
        InputMsg.value = "";

    },800)

   }

   if(InputMsg.value == 5){

    setTimeout(()=>{

        resp5.style.display = "flex";
        InputMsg.value = "";

    },800)

   }

   if(InputMsg.value ==6){

    setTimeout(()=>{

        resp6.style.display = "flex";
        InputMsg.value = "";
    },800)

   }

   if(InputMsg.value == 7){

    setTimeout(()=>{

        resp7.style.display = "flex";
        InputMsg.value = "";

    },800)

   }

   if(InputMsg.value == 8) {

    setTimeout(()=>{

        resp8.style.display = "flex";
        InputMsg.value = "";

    },800)

   }

   if(InputMsg.value == 9){

    setTimeout(()=>{

        resp1.style.display = "none";
        resp2.style.display = "none";
        resp3.style.display = "none";
        resp4.style.display = "none";
        resp5.style.display = "none";
        resp6.style.display = "none";
        resp7.style.display = "none";
        resp8.style.display = "none";
        nentendida.style.display = "none";
        InputMsg.value = "";
        
    },800)
   
   }else if(InputMsg.value>=10){

    nentendida.style.display = "flex";
    resp1.style.display = "none";
    resp2.style.display = "none";
    resp3.style.display = "none";
    resp4.style.display = "none";
    resp5.style.display = "none";
    resp6.style.display = "none";
    resp7.style.display = "none";
    resp8.style.display = "none";
    InputMsg.value = "";
   }

}
