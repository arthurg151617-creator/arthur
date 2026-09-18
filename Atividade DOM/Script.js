let pontos = 10;

function mostrarPersonagem() {
    let personagem = document.getElementById("personagem").value;

    document.getElementById("mensagem").textContent =
        "Seu personagem é " + personagem + "!";
}

function destacarMensagem() {
    let mensagem = document.getElementById("mensagem");

    mensagem.style.color = "purple";
    mensagem.style.fontSize = "25px";
}

document.getElementById("botaoPersonagem").onclick = mostrarPersonagem;

document.getElementById("botaoDestaque").onclick = destacarMensagem;

document.getElementById("mais").onclick = function() {
    pontos++;
    document.getElementById("contador").textContent = pontos;
};

document.getElementById("menos").onclick = function() {
    pontos--;
    document.getElementById("contador").textContent = pontos;
};