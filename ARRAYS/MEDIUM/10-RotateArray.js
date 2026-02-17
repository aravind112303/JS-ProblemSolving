// Rotate an Array
//       [1, 2, 3, 4, 5], 2  → [4, 5, 1, 2, 3]
// Write a function that rotates an array to the right by a given number of steps.


function RotateArray(arr , steps) {
    result =[];
    const n= arr.length;
    steps = steps%n;
    for(let i=n-steps; i<n; i++) {
        result[result.length] = arr[i];
    }
    for(let i=0; i< n-steps; i++) {
        result[result.length] = arr[i];
    }
    console.log(result);
    
}

const arr = [1,2,3,4,5]
RotateArray(arr, 2);