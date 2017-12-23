// Write an action using print()
// To debug: printErr('Debug messages...');
const NUM_OF_ASCII_CHARS = 27,
      A_ASCII_CODE = 65,
      Z_ASCII_CODE = 90,
      L = parseInt(readline()),
      H = parseInt(readline()),
      T = readline(),
      asciiChars = Array.apply(null, {length: H}).map(_ => []);

asciiChars.forEach(row => {
    let rowStr = readline();
    for (let k = 0; k < NUM_OF_ASCII_CHARS; k++) {
        row.push(rowStr.slice(L*k, L*(k+1)));
    }
});

printAsciiArt();

// prints ascii art
function printAsciiArt() {
    const asciiIndexes = convertToAsciiIndexes();
    for (let i = 0; i < H; i++) {
        print(
            asciiIndexes.map(j => asciiChars[i][j]).join('')
        );
    }
}

// returns an array of the indexes for ASCII characters
function convertToAsciiIndexes() {
    return T.split('').reduce((newArr, char) => {
        const code = char.toUpperCase().charCodeAt();
        if (code >= A_ASCII_CODE && code <= Z_ASCII_CODE) {
            newArr.push(code - A_ASCII_CODE);
        }
        else {
            newArr.push(NUM_OF_ASCII_CHARS-1);
        }
        return newArr;
    }, []);
}
