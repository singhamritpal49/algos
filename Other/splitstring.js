function solution(str) {
    // solution('abc') // should return ['ab', 'c_']
    // solution('abcdef') // should return ['ab', 'cd', 'ef']
    let result = []
    for (let i = 0; i < str.length;  i= i + 2) {
        if (str.length % 2 === 0) {
            result.push(`${str[i] + str[i+1]}`)
        } else {
            result.push(str[i] + ( str[i+1] ? str[i+1] : "_" ))
        }
    }
    return result
}