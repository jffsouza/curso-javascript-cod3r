// Não aceita repetição / Não indexada
const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco')

console.log(times)
console.log(times.size)             // Tamanho dos elemtos 
console.log(times.has('vasco'))     // Se o elemento esta contido ou não dentro do set
console.log(times.has('Vasco'))
times.delete('Flamengo')            // Deleta do set.
console.log(times.has('Flamengo'))  

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)