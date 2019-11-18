const soma =  function (x, y){
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma){
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function (x, y) {
    return x - y
})

// Função anônima c/ Arrow
imprimirResultado(3, 4, (x , y) => x * y)


// Função anônima com objeto.
const pessoa = {
    falar : function (){
        console.log('Ola, pessoal!')
    }
}

pessoa.falar()