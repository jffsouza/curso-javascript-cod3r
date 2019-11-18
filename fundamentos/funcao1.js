// Funcao sem retorno

function imprimirSoma(a, b)
{
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma() // valor undefined retorna Not a Number
imprimirSoma(2) // segundo valor não definido, retorna not a number


function soma(a, b = 0)
{
    return a + b
}

console.log(soma(515151851, 554545454))
console.log (soma(2))
console.log (soma(25, 26, 27, 98)) // ignora os demais.

