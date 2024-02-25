function ternaPit() {
    for (let i = 1; i < 500; i++) {
        for (let j = i + 1; j < 500; j++) {
            for (let k = j + 1; k < 500; k++) {
                if (k**2 == j**2 + i**2) {
                    console.log("Lado 1: " + i + ", Lado 2: " + j + ", Hipotenusa: " + k);
                }
            }
        }
    }
}

ternaPit();
