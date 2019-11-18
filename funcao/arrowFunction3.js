
// O this em uma função normal aponta pro contexto global
let comparaComThis = function (param){
    console.log(this === param)
}

comparaComThis(global)
const obj = {}

// Com o bind você aponta pro objeto da função
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

// Ja com a função arrow o this não aponta para o global
let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

// Mesmo utilizando o bind não é possivel alterar a referência.
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)

/**
 *    O this de uma função Arrow, é um this 
 *    associado a um contexto no qual a funçao foi escrita.
 **/