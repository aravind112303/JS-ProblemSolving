let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let mainDiagonal = 0;
let secondaryDiagonal = 0;

for(let i=0; i<matrix.length; i++) {
    mainDiagonal += matrix[i][i];
    secondaryDiagonal += matrix[i][matrix.length-1-i];
}

console.log(`Main Diagonal Sum : ${mainDiagonal}`);
console.log(`Secondary Diagonal Sum : ${secondaryDiagonal}`);

// output :
// Main Diagonal Sum : 15
// Secondary Diagonal Sum : 15
