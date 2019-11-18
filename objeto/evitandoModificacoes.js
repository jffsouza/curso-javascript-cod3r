// Object.preventExtensions

// O produto pode ter seu atributo alterado pois não é como no metódo freezy.
// Porém o mesmo nao pode ter nenhum atributo acrescentado. Entretando, pode ser excluido.
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha branca'
delete produto.tag
console.log(produto)


// Object.seal
// Não é possivel adicionar, excluir, porém ainda é possivel alterar os atributos ja existentes.

const pessoa = { nome: 'Jefferson', idade: 35}
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))
pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze = selado + valores constantes


