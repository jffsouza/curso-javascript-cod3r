const produto = new Object
produto.nome = 'Cadeira'
produto['Marca produto'] = 'Genérica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['Marca produto']

console.log(produto)

// Objetos podem contemplar diversas estruturas.

const carro = {
    modelo: 'A4',
    valor: 90000,

    // Outros objetos

    proprietario: {
        nome: 'Jefferson',
        idade: 23,
        endereco:{
            logradouro: 'Rua ABC',
            numero: 15
        }
    },

    // Arrays

    condutores:  [{
        nome: 'Fernanda',
        idade: 19
    }, {
        nome: 'Babi',
        idade: 23
    }],

    // Funções

    calcularValorDoSeguro: function(){
        console.log('Seguro ainda não liberado!')
    }
}

console.log(carro)
console.log(carro.calcularValorDoSeguro())


// Acessando através da notaçao ponto
carro.proprietario.endereco.numero = 1000

// Acessando através da notação colchetes
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'

console.log(carro)

