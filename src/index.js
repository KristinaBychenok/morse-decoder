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
    let obj = {
        '10': '.',
        '11': '-',
        '**********': ' '
    }

    let arr = []
    let p = 0;
    for (let i = 0; i < Math.round(expr.length / 10); i++) {
        let str = expr.substr(p, 10);
        p += 10;

        for (letter of str) {
            if (letter == '*') {
                arr.push(obj[str])
                break
            } else if (letter == '1') {
                let ourNumber = str.slice(str.indexOf(letter))
                t = 0;
                let mors = '';
                for (let j = 0; j < Math.round(ourNumber.length / 2); j++) {
                    mors += obj[(ourNumber.substr(t, 2))];
                    t += 2;
                }
                arr.push(MORSE_TABLE[mors])
                break
            }
        }
    }

    return arr.join('')

}

module.exports = {
    decode
}