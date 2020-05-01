// Examples
// capitalize(‘good weather’) → “Good Weather”
// capitalize(‘lazy days during quarantine’) →” Lazy Days During Quarantine”

function capitalize(string) {
    let words = string.split(' '); 
     string = []
    for(let i = 0; i < words.length;i++) {
            string.push(words[i][0].toUpperCase() + words[i].slice(1))
    }
    return string.join(' ')
}