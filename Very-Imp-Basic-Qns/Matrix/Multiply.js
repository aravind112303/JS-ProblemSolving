let A = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let B = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1]
];

let result =[];

// Step 1: Initialize result matrix
for (let i = 0; i < A.length; i++) {
    result[i] = [];
    for (let j = 0; j < B[0].length; j++) {
        result[i][j] = 0;
    }
}

// Step 2: Multiply matrices
for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B[0].length; j++) {
        for (let k = 0; k < B.length; k++) {
            result[i][j] += A[i][k] * B[k][j];
        }
    }
}

console.log(result);
