// Modify the kebabize function so that it converts a camel case string into a kebab case.

// kebabize('camelsHaveThreeHumps') // camels-have-three-humps
// kebabize('camelsHave3Humps') // camels-have-humps


function kababize(str) {
    let array = [];
    for (let i = 0; i < str.length; i++) {
        if (!Number.isInteger(parseInt(str[i]))) {

            if(str[i] === str[i].toUpperCase()) {
                array.push("-")
                array.push(str[i].toLowerCase())
            }
            if(str[i] === str[i].toLowerCase()) {
                array.push(str[i])
            }
                
        }
    }
    return array.join('')
}
