// const message = [ 'c', 'a', 'k', 'e', ' ',
// 'p', 'o', 'u', 'n', 'd', ' ',
// 's', 't', 'e', 'a', 'l' ];

// reverseWords(message);

// console.log(message.join(''));
// Prints: 'steal pound cake'

function reverseCharacters(string) {

    let t = string.join('')
    let message = t.split(' ');
    let lastElement = message.length - 1;
       console.log(message)
    for (let i = 0; i < message.length/2; i++) {
        let temp = message[i]
        message[i] = message[lastElement];
        message[lastElement] = temp;
        lastElement--
    }

    return message;
}

