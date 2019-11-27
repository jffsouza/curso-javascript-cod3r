// Uma promisse precisa ser atentida ou rejeitada.

// Abaixo um exemplo de função que tem dois parametros e retorna uma promessa.
// A promessa tem um setTimeOut(simulando tempo maior de processamento)
// Quando essa promesa for atendida é executado o resolve.
function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)      // OBS: Aceita apenas um parametro.
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que legal!')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))