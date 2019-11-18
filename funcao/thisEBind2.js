function Pessoa(){
    this.idade = 0

    const self = this
    
    /* Recebe um intervalo e uma função, a cada 1000 milisecundos (1segundo) 
    essa função sera executado novamente.*/

    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }), 1000
}

new Pessoa