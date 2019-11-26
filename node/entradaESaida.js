// Definindo uma flag para acessar através do terminal.
const anonimo = process.argv.indexOf('-a') !== -1
// console.log(anonimo)

// Caso passe a flag.
if(anonimo) {
    process.stdout.write('Fala Anônimo!\n')
    process.exit()
} else { 
    // Caso não passe a flag
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data => {
        const nome = data.toString()//.replace('\n', '')

        process.stdout.write(`Fala ${nome}!!`)
        process.exit()
    })
}