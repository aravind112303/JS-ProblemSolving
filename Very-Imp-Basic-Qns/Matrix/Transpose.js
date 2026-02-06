//Original matrix 

let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

// Step 1: Create empty matrix for transpose

let transpose =[];

for(let i=0; i< matrix[0].length; i++) {
    transpose[i] = [];  //create empty row
}

for(let i=0; i< matrix.length; i++) {
    for(let j=0; j<matrix[0].length; j++) {
        transpose[j][i] = matrix[i][j];
    }
}

// print matirx
for(let i=0; i<transpose.length; i++) {
    let row ="";
    for(let j=0; j <transpose[i].length; j++) {
        row += transpose[i][j] + " ";
    }
    console.log(row);
}

console.log(transpose);

// output
// 1 4 7 
// 2 5 8 
// 3 6 9

// [ [ 1, 4, 7 ], [ 2, 5, 8 ], [ 3, 6, 9 ] ]
