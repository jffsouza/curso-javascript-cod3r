// Arrow Function - Uma função arrow sempre será anônima

// Função tradicional
const soma1 = function(a, b) {
    return a + b
}

// Com função arrow - Neste caso onde é empregado o copo de {} é necessário incluir o retorno.
// Caso contrário a função retornara o valor de undefined.
const soma2 = (a, b) => { 
    return a + b 
}

// Com função arrow resumida - Função em uma única linha.
const soma3 = (a, b) => a + b
console.log(soma1(2, 3))
console.log(soma2(2, 3))
console.log(soma3(2, 3))

// Parametro default
function log (texto = 'Node'){
    console.log(texto)
}
log() // Assumi o valor padrão.
log('Qualquer coisa') // Substitui por ser mais forte.

// Operador rest
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(total(2, 3, 4 ,5))