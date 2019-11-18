const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
console.log(pilotos)

// Método POP - Remove o ultimo elemento do array
pilotos.pop()
console.log(pilotos)

// Método Push - Adiciona um elemento no final do array
pilotos.push('Verstappen')
console.log(pilotos)

// Método Shift - Remove o primeiro elemento do array
pilotos.shift()
console.log(pilotos)

// Método unShift - Adiciona um elemento no inicio do array
pilotos.unshift('Hamilton')
console.log(pilotos)

// Método Splice - Pode adicionar ou remover elementos

// ** Adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa') 
// Le-sê: a partir do indice dois, sem remover nenhum elemento sera adicionado 'Bottas', 'Massa'
console.log(pilotos)

// ** Remover
pilotos.splice(4, 2)
// Le-sê: a partir do indice quatro, remover dois elementos.
console.log(pilotos)

// Método Slice - Gera um novo array determinado ou não a parir de qual indice.
const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)
const algunsPilotos2 = pilotos.slice(1, 4)
// OBS: Nesse caso ele não considera o indice 4, sera incluido até o indice 3