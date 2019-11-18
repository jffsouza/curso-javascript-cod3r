// Como funciona o filter

Array.prototype.filter2 = function(callback){
    const newArray = []
    for (let i = 0; i < this.length; i ++) {
        if (callback(this[i], i, this)) {
            new Array.push(this[i])
        }
    }
}

const produtos = [
    { nome : 'Notebook', preco: 2499, fragil: true },
    { nome : 'iPad Pro', preco: 4199, fragil: true },
    { nome : 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome : 'Copo de Plastico', preco: 18.99, fragil: false },
]



console.log(produtos.filter(function(p) {
    return p.preco > 10
}))
// OBS: Retornando true todos os elementos são retornados.

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter2(caro).filter2(fragil))