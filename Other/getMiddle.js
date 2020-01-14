function getMiddle(string) {
    // ("test") should return "es"
    //   "testing") should return "t" 
    let result
    if (string.length % 2 === 0) {
        result = (string[Math.floor(string.length / 2) - 1])
        + (string[Math.floor(string.length / 2)])
    } else {
        result = (string[Math.floor(string.length / 2)])
    }
    return result

}
