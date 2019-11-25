// Sem factory o objeto faz cache.
const contadorA = require ('./instanciaUnica')
const contadorB = require ('./instanciaUnica')

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor)


// Com factory o objeto não faz cache.
const contadorC = require ('./instanciaNova')()
const contadorD = require ('./instanciaNova')()

contadorC.inc()
contadorC.inc()
console.log(contadorD.valor)