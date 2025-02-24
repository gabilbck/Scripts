/*
Crie uma função que retorna a string "Olá, " concatenada com um argumento
text a ser passado para função) e com ponto de exclamação "!" no final.
*/

function cumprimentar(nome){
    var resposta = "Olá, " + nome + "!";
    return resposta;
}

console.log(cumprimentar("Leonardo"));
console.log(cumprimentar("Maria"));