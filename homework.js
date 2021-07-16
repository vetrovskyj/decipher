const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const shiftChar = (c, shift) => {
    let i = alphabet.indexOf(c);
    if (i - shift < 0) {
        i = i + 26;
    }
    c = alphabet.charAt(i - shift);
    return c;
};

function isInArray(value, array) {
    return array.indexOf(value) > -1;
}

const shiftString = (str, shift) => {
    let i;
    shiftedStr = '';
    for (i = 0; i < str.length; i++) {
        if (isInArray(str.charAt(i), alphabet.split(''))) {
            shiftedChar = shiftChar(str.charAt(i), shift);
        } else {
            shiftedChar = str.charAt(i);
        };
        shiftedStr = shiftedStr + shiftedChar;
    }
    return shiftedStr;
};

const caesarDecipher = (cipherText, usedKey) => {
    deciphered = shiftString(cipherText.toUpperCase(), usedKey);
    return deciphered;
};

console.log(caesarDecipher("MPH MABGZL TKX BGYBGBMX: MAX NGBOXKLX TGW ANFTG LMNIBWBMR; TGW B'F GHM LNKX TUHNM MAX NGBOXKLX. - TEUXKM XBGLMXBG", 19));

console.log(caesarDecipher("YMJWJ NX ST QFB JCHJUY YMJ QFB YMFY YMJWJ NX ST QFB. - OTMS FWHMNGFQI BMJJQJW", 5));

console.log(caesarDecipher("M YMZ ITA PMDQE FA IMEFQ AZQ TAGD AR FUYQ TME ZAF PUEOAHQDQP FTQ HMXGQ AR XURQ. ― OTMDXQE PMDIUZ", 12));

const cipherTextArea = document.querySelector('#cipher-text-area');
const usedKeyInput = document.querySelector('#used-key-input');
const decipherButton = document.querySelector('#decipher-button');
const output = document.querySelector('#output');
const form = document.querySelector('#form');

decipherButton.addEventListener('click', (e) => {
    let cipherText = cipherTextArea.value;
    let usedKey = usedKeyInput.value;
    if (usedKeyInput.value > 26) {
        form.insertBefore(warning, decipherButton);
    } else {
        output.innerText = caesarDecipher(cipherText, usedKey);
    };

    e.preventDefault();
})