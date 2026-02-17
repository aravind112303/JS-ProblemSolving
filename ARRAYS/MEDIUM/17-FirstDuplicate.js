// Find the First Duplicate
//        [2, 1, 3, 5, 3, 2] → 3
// Write a function to return the first duplicate value in an array.


function FirstDuplicate(arr) {
    let seen = {};
    for(let i=0; i<arr.length; i++) {
        if(seen[arr[i]]) {
            return arr[i];
        }
        seen[arr[i]] = true;
    }
    return -1;
}

const dup = FirstDuplicate([2,1,3,5,3,2]);
console.log(dup);
