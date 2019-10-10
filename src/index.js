const MORSE_TABLE = {
    "          ": " ",
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
    let strRes = "";
    let arrStr = [];
    let end = 10;

    for (let start = 0; start < expr.length; start += 10) {
        arrStr.push(expr.substring(start, end));
        end += 10;
    }

    let arrCutZero = arrStr.map(function(item, index, array) {
        if (item[0] == 0) {
            for (let i = 1; i < item.length; i++) {
                if (!(item[i] == 0)) {
                    return item.substring(i, item.length);
                }
            }
        } else {
            return item;
        }
    });

    let arrpointDefis = arrCutZero.map(function(strCatZero) {
        let strPointDefis = "";
        for (let i = 0; i < strCatZero.length; i++) {
            if (strCatZero[i] == "*") {
                strPointDefis += " ";
            }

            if (strCatZero[i] == 1 && strCatZero[i + 1] == 1) {
                strPointDefis += "-";
                i++;
            } else if (strCatZero[i] == 1 && strCatZero[i + 1] == 0) {
                strPointDefis += ".";
                i++;
            }
        }
        return strPointDefis;
    });

    arrpointDefis.forEach(function(item, index, array) {
        strRes += MORSE_TABLE[item];
    });
    return strRes;
}

module.exports = {
    decode
}