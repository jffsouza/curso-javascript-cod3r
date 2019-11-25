const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: '1249.99',
    desconto: 0.15
}

// Converte o objeto para JSON, persistindo e salvado no disco.
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err =>{
    console.log(err || 'Arquivo salvo!')
})

//Após executado foi gerado automaticamente "arquivoGerado.json"