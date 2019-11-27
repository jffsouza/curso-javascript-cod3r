// Var, let e const

// Var - Função e global
// Let - Escopo de bloco
{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a)

// Const funciona como o let, tem escopo de bloco, porém uma vez atribuído um valor a ela, este não pode ser alterado.
// O código abaixo gera um Uncaught TypeError: Assignment to constant variable, pois o comportamento fundamental de uma constante.
/* void function(){ 
    const mensagem = 'Alura'; 
    console.log(mensagem); // Alura
    mensagem = 'Caelum'; 
}()*/

// Template string
const produto = 'iPad'
console.log(`${produto} é caro!`) // Desse modo é interpolado a string.

// Destructuring
const [l, e, ...tras] = "Testando"
console.log(l, e, tras)

const [x, y] = [1, 2 ,3]
console.log(x, y)

const { idade, nome } = { nome: 'Ana', idade: 9 }
console.log(idade, nome)