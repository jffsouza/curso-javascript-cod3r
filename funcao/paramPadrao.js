// Estratégias para gerar valor padrão

function soma (a, b, c){
    
    // Estratégia 1
    a = a !== undefined ? a : 1

    // Estratégia 2
    b = 1 in arguments ? b : 1

    // Estratégia 3 - Muito utilizada
    c = isNan(c) ? 1 : c

    return a + b + c
}

// Valor padrão do es2015 - Forma mais adequada e simplificada.

function soma2(a = 1, b = 1, c = 1){
    return a + b + c
}

console.log(soma2(), soma2(2), soma2(2, 3 , 4))