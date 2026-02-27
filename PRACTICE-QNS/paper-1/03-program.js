// Write a program that takes a 2D matrix (MxN) and prints its elements in spiral order, starting from the top-left corner and moving clockwise. 
// Example: Input = [ [1, 2, 3], [4, 5, 6], [7, 8, 9]]
//  Output 1 2 3 6 9 8 7 4 5

function SprialMatrix(arr) {
    let rowStart = 0;
    let rowEnd = arr.length - 1;
    let colStart = 0;
    let colEnd = arr[0].length - 1;
    let result = "";

    while (rowStart <= rowEnd && colStart <= colEnd) {

        // Top row
        for (let i = colStart; i <= colEnd; i++) {
            result += arr[rowStart][i] + " ";
        }

        // Right column
        for (let i = rowStart + 1; i <= rowEnd; i++) {
            result += arr[i][colEnd] + " ";
        }

        // Bottom row
        for (let i = colEnd - 1; i >= colStart; i--) {
            if (rowStart === rowEnd) break;
            result += arr[rowEnd][i] + " ";
        }

        // Left column (FIXED)
        for (let i = rowEnd - 1; i > rowStart; i--) {
            if (colStart === colEnd) break;
            result += arr[i][colStart] + " ";
        }

        rowStart++;
        colStart++;
        rowEnd--;
        colEnd--;
    }

    console.log(result.trim());
}

let arr = [[1,2,3],[4,5,6],[7,8,9]];
SprialMatrix(arr);