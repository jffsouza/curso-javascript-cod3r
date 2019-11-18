const a = 1
const b = 2
const c = 3

// Permite alterar a constante
const obj1 = {a: a, b: b, c: c}

// Padrão utilizado
const obj2 = {a, b, c}
const nomeAttr = 'Nota'
const valorAttr = 7.87






const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

// OU

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)


const obj5 = {
    funcao1: function(){
        //...
    },
    funcao2(){
        //...
    }
}

console.log(obj5)