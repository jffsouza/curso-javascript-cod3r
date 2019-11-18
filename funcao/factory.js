// Factory é uma função que sempre retorna um objeto.

// Factory Simples

function criarPessoa(){
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())