/*
Escreva uma função que receba a idade de uma pessoa 
em anos e retorne a mesma idade em dias
*/

function tratarIdade(idade){
    var resposta = idade*365;
    return resposta;
}

console.log(tratarIdade(25));
console.log(tratarIdade(70));