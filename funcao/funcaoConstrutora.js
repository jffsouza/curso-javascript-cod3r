function Carro(velocidadeMaxima = 200, delta = 5){
    // Atributo privado, pertence apenas ao escopo desta função.
    let velocidadeAtual = 0

    // Metodo público - o uso do 'this' o torna publico.
    this.acelerar = function (){
        if (velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        }
        else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())


const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)

// A Função Construtora, funciona como uma classe (molde) das outras linguagens.
// Define comportamentos e atributos dentro dessa funçao. 