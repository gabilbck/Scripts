/*
Escreva uma função que receba um valor booleano ou numérico.
Se o parâmetro fornecido for booleano, o retorno da função
deverá ser o inverso. Por exemplo, se a entrada for false,
retornará true. Se o parâmetro for numérico, o retorno será
o número inverso. Por exemplo, se for fornecido 1, o retorno
será -1. Se o parâmetro de entrada não for de nenhum dos tipo
acima, retorne "booleano ou número esperados, mas o parâmetro
é do tipo ...".
*/

function ehNumero(valor) {
    return !isNaN(Number(valor));
}

function inverso(entrada){
    var resposta;
    if (entrada === true){
        return false;
    } else if (entrada === false){
        return true;
    } else if (ehNumero(entrada)){
        resposta = entrada * -1;
        return resposta;
    }
}

console.log(inverso(true))// retornará false
console.log(inverso("6")) // retornará "booleano ou número esperados, mas o parâmetro é do tipo string" 
console.log(inverso(-2000)) // retornará 2000
console.log(inverso ("programação")) // retornará "booleano ou números esperado, mas o parâmetro é do tipo string"
