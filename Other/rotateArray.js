function rotate(matrix) {
    let n = matrix.length;
    for(let i = 0; i < n;i++) {
        for(let j = i; j < n;j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }

}