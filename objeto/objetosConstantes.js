// pessoa -> (aponta para o endereço de memoria) -> 123
const pessoa = { nome: 'Joao' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = {nome: 'Ana'}


// Impossibilita alterar o objeto
Object.freeze(pessoa)
pessoa.nome = 'Maria'
console.log(pessoa.nome)