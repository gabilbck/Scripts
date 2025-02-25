/*
Desenvolva uma função que recebe dois numeros inteiros
não negativos (> ou = 0) e realize a multiplicação deles
sem utilizar o operador de multiplicação (*).
*/
function multiplicar(x, y){
    var resultado = 0;
    if (x < 0 || y < 0){
        resultado = "Valor inválido";
        return resultado;
    }else{
        // No looping o valor de x é somado a variável resultado.
        // pela quantidade de vezes (loopings) definida pelo valor de y
        for (var i = 0; i < y; i++){
            resultado += x;
        }
        return resultado;
    }

}

console.log(multiplicar(5, 5)); // 25
console.log(multiplicar(0, 7)); // 0