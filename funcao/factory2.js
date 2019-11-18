function criarProduto (nome, preco){
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Celular', 2199.00.toFixed(2)))
console.log(criarProduto('Notebook', 2199.00.toFixed(2)))
console.log(criarProduto('TV', 2199.00.toFixed(2)))
console.log(criarProduto('Computador', 2199.00.toFixed(2))) 
