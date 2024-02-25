function dec() {
    let decimals = [];

    for (let i = 1; i <= 255; i++) {
        decimals.push(i);
    }

    return decimals;
}

let nDec = dec();

// console.log(nDec)

function toOctal() {
    let octals = [];

    for (let i = 1; i <= 255; i++) {
        let octal = '';
        let number = i;

        while (number > 0) {
            let remainder = number % 8;
            octal = remainder + octal;
            number = Math.floor(number / 8)
        }

        octals.push(octal)
    }

    return octals;
}

let nOct = toOctal();

// console.log(nOct)

function toHexa() {
    let hexas = [];

    for (let i = 1; i <= 255; i++) {
        let hexa = i.toString(16);
        hexas.push(hexa);
    }

    return hexas;
}

let nHex = toHexa();

// console.log(nHex)

function toBinary() {
    let binarios = [];

    for (let i = 1; i <= 255; i++) {
        let binario = i.toString(2);
        binarios.push(binario);
    }

    return binarios;
}

let nBin = toBinary();

// console.log(nBin)

let table = {
    decimals: nDec,
    octals: nOct,
    hexas: nHex,
    binaries: nBin
}

console.log(table)