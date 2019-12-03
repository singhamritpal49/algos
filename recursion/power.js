// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(b,e){
    if (e === 0) return 1;
    return b * power(b, e - 1)
}