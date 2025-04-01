/*
 Esse módulo implementa as operações básicas de uma calculadora. 
 Essas funões devem ser exportadas para serem usadas em outros arquivoss fontes.
*/

export function somar (a, b){
    return a + b;
}

export function subtrair (a, b){
    return a - b;
}

export function multiplicar (a, b){
    return a * b;
}

export function dividir (a, b){
    return a / b;
}

export const PI = 3.14;

/* modulo.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir
} Uma outra forma de exportar as funções.*/