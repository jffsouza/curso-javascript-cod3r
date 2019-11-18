// VERSAO ANTIGA

function soma(){
    let soma = 0
    for (i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(0))
console.log(soma(1, 2, 3, 4))
console.log('A', 'B', 'TESTE')