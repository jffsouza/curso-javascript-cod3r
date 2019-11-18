// Função em JS é First-Class Object (Citiziens)
// Higher-order function

// Criar de forma literal
function fun1() {}

// Armazenar em um variável
const fun2 = function() {}

// Armazenar em um array
const array = [function (a, b) {return a + b}, fun1. fun2]
console.log (array[0](2,3))

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function() {return "Opa"}
console.log (obj.falar())

// Passar função com param
function run (fun){
    fun()
}

run(function() {console.log("Executando...")})

// Uma funçao pode retornar/conter uma função
function soma (a,b){
    return function(c){
        console.log(a + b + c)
    }
}

soma (2,3)(4) /* OU */

const cincoMais = soma(2,3)
cincoMais(4)

