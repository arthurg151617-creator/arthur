function mudarTexto() {
   document.getElementById
   ("titulo").textContent = "Voce clicou no botao !";
}

function mudarCor() {
   document.getElementById
   ("mensagem").style.color = "blue";
}

function mostrarNome() {
   let nome = document.getElementById("nome").value;

   document.getElementById("resultado").textContent = 
      "Ola, " + nome + "!";
}
 
 let contador = 0; 

 function aumentar() {
     contador++;

     document.getElementById("numero").textContent = contador;

 }

 function diminuir() {
   contardor++;

   document.getElementById("numero").textContent = contado;
 } 

 