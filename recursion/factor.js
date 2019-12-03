
//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

function factorial() {
    if (x < 0) return 0;
    if (x <= 1) return 1;
    return x * factorial(x -1);
}