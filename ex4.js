const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const estoque = 10;

rl.question("Digite a quantidade desejada: ", (qtdDesejada) => {
    if (qtDesejada <= estoque) {
        console.log("Disponivel");
    } else if (qtdDesejada > estoque){
        console.log("Indisponível");
    } else if {
        console.log("Valor inválido");
    }
    rl.close();
});
    