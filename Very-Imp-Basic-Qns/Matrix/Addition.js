let matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let matrix2 = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1]
];

let sumMatrix =[];

for(let i=0; i<matrix1.length; i++) {
    sumMatrix[i] =[];
    for(let j=0; j<matrix1[i].length; j++) {
        sumMatrix[i][j] = matrix1[i][j] + matrix2[i][j];
    }
}

console.log(sumMatrix);

// output :
// [ [ 10, 10, 10 ], [ 10, 10, 10 ], [ 10, 10, 10 ] ]