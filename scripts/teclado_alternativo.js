const Teclado1 = document.getElementById("teclado1");
const Teclado2 = document.getElementById("teclado2");

const inserir = num =>{

  var numero =  document.querySelector('.campoSenha2').innerHTML;
  document.querySelector('.campoSenha2').innerHTML = numero + num;
}

const inserir2 = letra => {

    var letras = document.querySelector('.campoSenha2').innerHTML;
    document.querySelector('.campoSenha2').innerHTML = letras + letra;
    

}
function chamarTecladoLetras(){

    Teclado1.style.display = "none";
    Teclado2.style.display = "block";
}

function chamarTecladoNumero(){

    Teclado1.style.display = "block";
    Teclado2.style.display = "none";
}


function apagar(){

   var campoSenha2 = document.querySelector('.campoSenha2').innerHTML;
   document.querySelector('.campoSenha2').innerHTML = campoSenha2.substring(0,campoSenha2.length -1);
}