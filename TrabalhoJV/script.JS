
let nomeCompleto = prompt("Qual seu nome completo?");
let cargoFuncao = prompt("Qual seu cargo ou função?");
let escolaEmpresa = prompt("Qual sua escola ou empresa?");
let emailUsuario = prompt("Qual seu e-mail?");

let nomeMaiusculo = nomeCompleto.toUpperCase();

console.log("=== CARTÃO DE VISITA ===");
console.log("Nome: " + nomeMaiusculo);
console.log("Cargo: " + cargoFuncao);
console.log("Empresa: " + escolaEmpresa);
console.log("E-mail: " + emailUsuario);

alert("O cartão foi gerado!");


let produto = prompt("Nome do produto:");
let precoOriginal = Number(prompt("Preço original:"));
let descontoPercentual = Number(prompt("Porcentagem de desconto:"));

let valorDesconto = precoOriginal * (descontoPercentual / 100);
let precoFinal = precoOriginal - valorDesconto;

console.log("=== RESUMO DO DESCONTO ===");
console.log("Produto: " + produto);
console.log("Desconto: R$ " + valorDesconto);
console.log("Preço Final: R$ " + precoFinal);

alert("Produto: " + produto + "\nDesconto: R$ " + valorDesconto + "\nPreço Final: R$ " + precoFinal);



let senha = prompt("Digite sua senha:");
let tamanho = senha.length;
let classificacao = "Fraca";

if (tamanho >= 8) {
  classificacao = "Forte";
} else if (tamanho >= 5) {
  classificacao = "Média";
}

console.log("=== ANÁLISE DA SENHA ===");
console.log("Tamanho: " + tamanho);
console.log("Classificação: " + classificacao);

alert("Tamanho da senha: " + tamanho + "\nResultado: " + classificacao);
