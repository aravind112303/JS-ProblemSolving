// Reverse an Array
//        [1, 2, 3, 4, 5] → [5, 4, 3, 2, 1]
// Write a function to reverse the elements in an array.




function ReverseArray(arr) {
    let start = 0;
    let end = arr.length-1;
    while(start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    return arr;
}

let arr = [1,2,3,4,5];
console.log(ReverseArray(arr));
