
let nome    = prompt('Qual e o seu nome?');
let pesoStr = prompt(`Ola, ${nome}! Qual e o seu peso em kg?\n(use virgula ou ponto - ex: 75,5 ou 75.5)`) ;
let altStr  = prompt('Qual e a sua altura em metros?\n(ex: 1,75 ou 1.75)');


let peso = NUmber(pesoStr.replace(',','.'));
let alt  = Number(altStr.replace(',', '.'));

console.log('Nome:', nome);
console.log('Peso:', peso, typeof peso);
console.log('Altura:', alt, typeof alt);

let imc = peso / (alt * alt);
let imcFormatado = imc.toFixed(1);

if (imc < 18.5){
    console.log('Abaixo do peso')
} else if (imc < 25) {
    console.log('Peso normal')
} else if (imc < 30) {
    console.log('Sobrepeso')
} else if (imc < 35) {
    console.log ('Obesidade grau I')
} else if (imc < 40) {
    console.log('Obesidade grau II')
} else {
    console.log('Obesidade grau III')
}

