// Spread - Espalhar / Rest - Juntar

// Usar spread como objeto
const funcionario = { nome: 'Maria', salario: 12348.99 }
const clone = { ativo: true, ... funcionario }
console.log(funcionario)
console.log(clone)

// Usar spread como array
const grupoA = ['Jefferson', 'Pedro', 'Glória']
const GrupoFinal = ['Maria', ...grupoA, 'Fernanda']
console.log(GrupoFinal)