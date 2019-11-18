const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir (nome, indice){
    console.log(`${indice + 1} - ${nome}`)
}

fabricantes.forEach(imprimir)

// OU

fabricantes.forEach(function(fabricante){
    console.log(fabricante)
})

// OU

fabricantes.forEach(fabricante => console.log(fabricante))

/*
 * Callback é passar uma função e essa 
 * função sera chamada novamente quando um evento acontecer.
 */