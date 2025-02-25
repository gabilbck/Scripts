/*
Desenvolva uma função que recebe dois parametros, um a qntd de
hrs trabalhadas por um funcionário num mês, e o quanto ele
recebe por hr. O retorno de função deve ser a string "Salário
igul a X", em que X é quanto o funcionário ganhou no mês.
*/

function calcularSalario(horasTrabalhadas, valorHora){
    var resposta = horasTrabalhadas*valorHora;
    return "Salário igual a R$ "+resposta;
}

console.log(calcularSalario(150, 40.5));