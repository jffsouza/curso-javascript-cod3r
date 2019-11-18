// Módulo do cliente que utiliza os módulos exportados A e B
// Você importa utilizando o Commons.js (Sistema de módulos do Node)

const moduloA = require('./moduloA')
const moduloB = require('./moduloB')

// Utilizando os módulos importados de A
console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA)

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(moduloB)
