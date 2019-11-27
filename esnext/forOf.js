// Exemplo - Percorrendo não só por arrays, mas também por string.
for (let letra of "Cod3r") {
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

// Percorre os indices
for (let i in assuntosEcma) {
    console.log(i)
}

// Percorre os elementos
for (let assunto of assuntosEcma) {
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
])

for (let assunto of assuntosMap) {
    console.log(assunto)
}

// Percorrendo as chaves
for (let chave of assuntosMap.keys()) {
    console.log(chave)
}

// Percorrendo os valores
for (let valor of assuntosMap.values()) {
    console.log(valor)
}

// Percorrer as entradas
for (let [ch, vl] of assuntosMap.entries()) {
    console.log(ch, vl)
}

const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
    console.log(letra)
}