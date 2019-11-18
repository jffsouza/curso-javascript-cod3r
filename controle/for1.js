let contador = 1
while (contador <= 10) {
    console.log("Contando: " + contador);
    contador++
}

// Mesmo laço utilizando o for

for (let i = 11; i <= 20; i++) {
    console.log("Contando: " + i);
}

const notas = [5.7, 8.9, 6.6, 4.4, 9.0]

for (let i = 0; i < notas.length; i++) {
    if (notas[i] > 5) {
        console.log("Aprovado - Nota: " + notas[i]);
    }
    else {
        console.log("Reprovado - Nota: " + notas[i]);
    }
}