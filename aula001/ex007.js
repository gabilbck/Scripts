/*
(Não entendi bem o enunciado)

Crie uma função que receba quatro números como parâmetro 
(numero, minimo, maximo, inclusivo) e retorne se o parâmetro
numero (o primeiro) está entre minimo e maximo. Quando o 
parâmetro inclusivo for true, tenha "entre" como inclusivo,
ou seja, considerando se numero é igual a minimo ou a maximo.
Caso o parâmetro inclusivo não seja informado, seu valor
padrão deverá ser false, portanto, a lógica será exclusiva,
não considerando se numero é igual a minimo ou a maximo.
*/

function estaEntre(numero, minimo, maximo, inclusivo = false) {
    if (inclusivo) {
        return numero >= minimo && numero <= maximo;
    }
    return numero < minimo || numero > maximo;
}

console.log(estaEntre(10, 50, 100)); // true (pois 10 está fora do intervalo [50, 100])
console.log(estaEntre(16, 100, 160, true)); // false (pois 16 está fora do intervalo [100, 160])
console.log(estaEntre(3, 3, 150)); // false (pois 3 está no limite inferior)
console.log(estaEntre(3, 3, 150, true)); // true (pois 3 é incluído no intervalo)
