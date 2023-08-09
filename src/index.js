const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const stringToArray = [];
    let encryptedWord = '';

    for (let i = 0; i < expr.length; i += 10) {
        stringToArray.push(expr.substring(i, i + 10));
    }

    for (const item of stringToArray) {
        console.log(item);

        let stringOf2Characters = '';

        for (let j = 0; j < item.length; j = j + 2) {
            if (item[j] === '*') {
                stringOf2Characters = ' ';
                break;
            }

            if (item[j] + item[j + 1] === '00') {
                continue;
            }

            if (item[j] + item[j + 1] === '10') {
                stringOf2Characters = stringOf2Characters + '.';
            }

            if (item[j] + item[j + 1] === '11') {
                stringOf2Characters = stringOf2Characters + '-';
            }

            console.log(stringOf2Characters);
        }

        encryptedWord = `${encryptedWord}${stringOf2Characters !== ' ' ? MORSE_TABLE[stringOf2Characters] : ' '}`;
    }

    return encryptedWord;
}

module.exports = {
    decode
}