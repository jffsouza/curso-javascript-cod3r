console.log(typeof Array, typeof new Array, typeof[])

let aprovados = new Array('Jefferson', 'Fernanda', 'Babi')
console.log(aprovados)

aprovados = ['Jefferson', 'Fernanda', 'Babi']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // Undefined

aprovados[3] = 'Maria'

// Método Push
// Mais apropriado para adicionar um novo elemento.
aprovados.push('Joao') 

console.log(aprovados.length)
aprovados[9] = 'Rafael' 
// Os indices que não foram definidos recebem a caracteristica undefinid e não null

console.log(aprovados)

// Método Sort
// Ordena os indices ** OBS: Não gera um novo array como em outros casos.
aprovados.sort() 
console.log(aprovados)

// Delete
delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']

// Método Splice - Deleta ou Acrescenta.
// O primeiro numero define a partir de qual indice sera tratado, o segundo quantos indices serão apagados,
// Se o mesmo for determinado o número 0, vai manter os indices e acrescentara o que for definido após o segundo número.
aprovados.splice(1, 2, 'Jefferson', 'Fernanda') 
console.log(aprovados)