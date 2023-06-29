const readline = require('readline')//padrao
const rl = readline.createInterface({//padrao
 input:process.stdin,//padrao
 output:process.stdout//padrao
});

 rl.question("Olá! Insira seu nome:", (nome) => {
    rl.question("Olá, nome, insira seu peso: ", (peso) => {
        rl.question("agora insira sua altura: ", (altura) =>{
            let imc = peso / (altura*altura);

            console.log(peso, altura);

            if(imc < 18.5) {
                console.log("MAGREZA");
            } else if (imc >= 18 && imc < 24.9) {
                console.log("NORMAL");
            } else if (imc >= 25 && imc < 29.9) {
                console.log("SOBREPESO");
            } else if (imc >= 30 && imc < 39.9) {
                console.log("OBESIDADE");
            } else if (imc >= 40) {
                console.log("OBESIDADE GRAVE");
            }
        });
    });
});
