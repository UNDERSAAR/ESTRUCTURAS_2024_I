function generateRandomNumbers(count, min, max) {
    let randomNumbers = [];
    for (let i = 0; i < count; i++) {
        let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        randomNumbers.push(randomNumber);
    }
    return randomNumbers;
}

let randomNumbersArray = generateRandomNumbers(20, 1, 100);

function getPos() {

    let posMayor = 0

    for (let i = 1; i <= randomNumbersArray.length; i++) {
        if (randomNumbersArray[i] > randomNumbersArray[posMayor]) {
            posMayor = i;
        }
    }

    return posMayor;
}

let posicionMayor = getPos(randomNumbersArray)
let numeroMayor = randomNumbersArray[posicionMayor]
console.log(randomNumbersArray)
console.log("Numero mayor: ", numeroMayor)
console.log("Posicion del numero mayor: ", posicionMayor)