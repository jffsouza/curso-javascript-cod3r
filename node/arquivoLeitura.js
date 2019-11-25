// Modulo interno do node.
const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// Sincrono (Não interessante, pode travar o Event Loop)
// Se o arquivo for pessado ele espera ler o arquivo completamente.
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// Assincrono
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

// OU

const config = require('./arquivo.json')
console.log(config.db)

fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})