// Object.keys
// ES8: Object.values/Object.entries
// .values - Pega os valores de um objeto.
// . entries - Conjunto de chave valor.

const obj = { a: 1 , b: 2, c: 3 }
console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))

// Melhorias na Notação Literal
// Novo
const name = 'Carla'
const person = {
    name,                   // Atribuição 
    ola(){                  // Função
        return          
    }
}


// Antigo
const nome = 'Carla'
const pessoa = {
    nome: nome,             // Atribuição
    ola : function() {      // Função
        return
    }
}

// Class

class Animal {} 
class Cachorro extends Animal {
    falar() {
        return 'Au au!'
    }
}

console.log(new Cachorro().falar())
