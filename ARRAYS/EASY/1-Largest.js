// Find the Largest Element in an Array
//       [3, 1, 4, 1, 5, 9]   → 9
// Given an array of numbers, write a function to return the largest number.


function FirstLargest(arr) {
    let large = -Infinity;
    for(let i=0; i<arr.length; i++) {
        if(arr[i] > large) {
            large = arr[i];
        }
    }
    console.log(`Large : ${large}`);
    
}

let arr = [2,3,8,4,6];
FirstLargest(arr);