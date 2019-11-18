// Lembrando que objetos é uma coleção de chaves e valores

const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

// Mostra as chaves
console.log(Object.keys(pessoa))

// Mostra os valores
console.log(Object.values(pessoa))

// Mostra lista dos valores
console.log(Object.entries(pessoa))

// Definindo propriedade
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,  // enumerada?
    writable: false,    // permite ser alterada?
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017' // Não alterado devido ao falso.
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const dest = {a : 1}
const o1 = {b : 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)
Object.freeze(obj)
