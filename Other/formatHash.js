// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'

// list([ {name: 'Bart'} ])
// // returns 'Bart'

let hash = [{
    name: 'Bart'
}, {
    name: 'Lisa'
}, {
    name: 'Maggie'
}]

function list(hash) {

    let result = [];

    for (let i = 0; i < hash.length; i++) {
       result.push(hash[i].name)
    }
    return result.join(' ')
}

list(hash)