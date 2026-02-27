// Write a program to rotate a square matrix (N x N) 90 degrees clockwise, in place (i.e., without using extra space for another matrix).
// Example:
// i/p : [[1,2,3],[4,5,6],[7,8,9]]
// o/p : [[7,4,1],[8,5,2],[9,6,3]]

function matrix(arr) {
   // Transpose a matrix
   for(let i=0; i<arr.length; i++) {
    for(let j=i+1; j<arr.length; j++) {
        let temp = arr[i][j];
        arr[i][j] = arr[j][i];
        arr[j][i] = temp;
    }
   }

   // reverse row 
   for(let i=0; i<arr.length; i++) {
    left = 0;
    right = arr.length-1;
    while(left < right) {
        let temp = arr[i][left];
        arr[i][left] = arr[i][right];
        arr[i][right] = temp;
        left++;
        right--;
    }
   }
   return arr;
}
let arr = [[1,2,3],[4,5,6],[7,8,9]];
let result = matrix(arr);
console.log(result);
