const notas = [5.7, 8.9, 6.6, 4.4, 9.0]

for (let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: "Jefferson",
    sobrenome: "Souza",
    idade: 23,
    endereço: "Wanderlust"
}

for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}