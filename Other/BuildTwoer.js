// for example, a tower of 3 floors looks like below

// [
//   '  *  ', 
//   ' *** ', 
//   '*****'
// ]
// and a tower of 6 floors looks like below

// [
//   '     *     ', 
//   '    ***    ', 
//   '   *****   ', 
//   '  *******  ', 
//   ' ********* ', 
//   '***********'
// ]



function towerBuilder(nFloors) {
    // build here

    let result = [];

    for (let i = 0; i < nFloors; i++) {

        result.push(" ".repeat(nFloors - i - 1) + "*".repeat((i * 2) + 1) + " ".repeat(nFloors - i - 1));
    }
    return result
}


