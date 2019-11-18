const valor = 'Global'

function minhaFuncao(){
    console.log(valor)
}

function exec(){
    const valor = 'Local'
    minhaFuncao()
}

exec()  

// Ela carrega o primeiro 'Valor', por conta do contexto lexico da função.
