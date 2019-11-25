require('./global')
console.log(MinhaApp.saudacao())

 // Cautela, pois  não é uma boa prática definir intens no escopo global devido a facil ateração! 
MinhaApp.nome = 'Eita!'

console.log(MinhaApp.nome)