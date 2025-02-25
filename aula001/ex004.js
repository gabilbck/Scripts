/*
Crie uma função que recebe um número (de 1 a 12) e retorne o mês
correspondente como uma string. Por exemplo, se a entrada for 2,
a função deverá retornar "fevereiro", pois este é o 2º mês.
*/
function nomeDoMes(mes){
    var resposta;
    switch(mes){
        case 1:
            resposta = "janeiro"
            break;
        case 2:
            resposta = "fevereiro"
            break;
        case 3:
            resposta = "março"
            break;
        case 4:
            resposta = "abril"
            break;
        case 5:
            resposta = "maio"
            break;
        case 6:
            resposta = "junho"
            break;
        case 7:
            resposta = "julho"
            break;
        case 8:
            resposta = "agosto"
            break;
        case 9:
            resposta = "setembro"
            break;
        case 10:
            resposta = "outubro"
            break;
        case 11:
            resposta = "novembro"
            break;
        case 12:
            resposta = "dezembro"
            break;
        default:
            resposta = "Entrada inválida"
            break;
    }
    return resposta;
}

console.log(nomeDoMes(1));
console.log(nomeDoMes(4));