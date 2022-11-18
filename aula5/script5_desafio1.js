/*
const saida = document.querySelector(".saida");
let num;
num = 7.8898;

saida.innerHTML=num.toFixed(2);

Solicitar a entrada de duas notas (av1 e av2)
Calcular a média entre av1 e av2 ==> media = (av1+av2)/2
Mostrar uma das mensagens
Qual a condição para mostrar uma das mensagens abaixo? >=6 
"Aprovado"
"Reprovado"
*/
// Código do GUSTAVO LUIS DOS SANTOS
let av1, av2, media;
const saida=document.querySelector(".saida");

av1 = parseFloat(prompt("Digite a primeira nota: "));
av2 = parseFloat(prompt("Digite a segunda nota: "));

media = (av1+av2)/2;

if (media>=6){
    saida.innerHTML=`A sua média foi ${media}, você foi APROVADO`
}
else {
    saida.innerHTML=`A sua média foi ${media} e você foi REPROVADO`
}