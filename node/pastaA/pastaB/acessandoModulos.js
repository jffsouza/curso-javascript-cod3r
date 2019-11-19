// Para subir os niveis das pastas basta utilizar "../"
const moduloA = require('../../moduloA')
console.log(moduloA.bemVindo)

// É procurado pelo módule exports o item com nome index.js
const saudacao = require('saudacao')
console.log(saudacao.ola)