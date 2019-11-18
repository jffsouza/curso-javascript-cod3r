const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c }}
console.log(JSON.stringify(obj))

// O inverso

// Para passar um JASON todos os atributos devem conter aspas duplas.
// É possivel tambem passar outros tipos de dados como string/booleano/objetos/arrays e etc. 
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))
console.log(JSON.parse('{ "a": 1, "b": "string", "c": true, "d": {}, "e": [] }'))