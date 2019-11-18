// Função padrão
let dobro = function (a){
    return 2 * a
}

// Função arrow simples
dobro = (a) => {
    return 2 * a
}

// Função arrow simplicada
/* Quando possui apenas um parâmetro */

dobro = a => 2 * a // Tambem possui retorno implícito


// Função padrão sem parametro
let ola = function () {
    return 'Ola'
}

// Com Arrow Function
ola = () => 'Ola'
console.log(ola())
