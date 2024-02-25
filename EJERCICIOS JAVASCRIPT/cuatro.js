const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Escribe un numero para saber si es abundante: ", function (userInput) {
    let number = parseInt(userInput);

    function isAbundante(number) {
        let n1n = [];
        let sum = 0;

        for (let i = 1; i <= number; i++) {
            if (number % i === 0) {
                n1n.push(i);
            }
        }

        for (let j = 0; j < n1n.length; j++) {
            sum += n1n[j];
        }

        if (sum > number * 2) {
            console.log("Si es abundante: " + sum + " > " + number * 2);
        } else {
            console.log("No es abundante: " + sum + " < " + number * 2);
        }
    }

    isAbundante(number);

    rl.close();
});
