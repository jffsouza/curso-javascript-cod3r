// A principio o modulo.exports inicia vazio
console.log(module.exports)

console.log(module.exports === this)
console.log(module.exports === exports)

// Formas de utilizar o objeto ja exportado.
this.a = 1
exports.b = 2
module.exports.c = 3

exports = null
console.log(module.exports)

// Sempre que necessario atribuir um novo objeto para ser exportado
// Obrigatóriamente deverá ser utilizado o module.exports
module.exports = {publico: true}
// Só sera retornado o que tiver module exports.