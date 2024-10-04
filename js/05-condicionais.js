/* Comandos condicinais
if    -> Se
else  -> SENÃO */

// Exemplo 1: condicional simples

let numero = 5;

if( numero > 10 ){
    console.log(numero);
}

// Exemplo 2: condicional composta
let aluno = "klaibert";
let idade = 18;

/* Lógica: verificar  se o aluno é menor de idade ou maior de idade. */
if( idade < 18 ){
    console.log("É menor de idade");
} else {
    console.log("É maior de idade");
}


/* Exercíos (FAÇA AQUI!!!)*/

/* 1) Crie duas variáveis conforme a seguir: Nota 1(contendo um valor de 0 a 10) Nota 2 (contendo outro valor de 0 a 10)*/

/* 2) Crie uma variável chamada "Média" que receberá o valor CALCULADO da média das duas notas informadas. DICA: você deve SOMAR as duas notas e DEPOIS dividir por 2.*/

/* 3) programe uma condicional que verifique o valor da média calculada. se a média for maior/igual a 7, mostre "aprovado". Caso contrário, mostre "reprovado". */

let nota_1 = 4;
let nota_2 = 7;

let media = (nota_1+nota_2) / 2;
console.log(media);


if(media >= 7){
    console.log("aprovado");
} else {
    console.log("reprovado");
}

/* lógica inversa */
if(media < 7){
    console.log("reprovado");
    
} else {
    console.log("aprovado");
}


/* ShortHand if/else (if/else "curto/abreviado") 
usando operador ternário  ?:  */
let situacao = media >= 7 ? "aprovado" : "reprovado";

console.log(situacao);
