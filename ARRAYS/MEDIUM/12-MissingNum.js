// Find Missing Number
//        [1, 2, 4, 5]   → [3]
// Given an array of consecutive numbers with one missing, find the missing number.

function MissingNum(arr) {
    let n= arr.length+1;
    actualSum = n*(n+1) /2;
    expectedSum = 0;
    for(let i=0; i<arr.length; i++) {
        expectedSum += arr[i];
    }
    console.log(actualSum-expectedSum);
    
}

MissingNum([1,2,4,5]);