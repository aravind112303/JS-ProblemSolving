// Check if Array is Sorted
//       [1, 2, 3, 4, 5]  →  true
// Write a function to check if an array is sorted in ascending order.


function ArraySorted() {
    for(let i=1; i<arr.length; i++) {
        if(arr[i-1] > arr[i]) {
           return false;
    }
}
return true;
}
let arr =[1,2,3,5,4];
console.log(ArraySorted(arr));
