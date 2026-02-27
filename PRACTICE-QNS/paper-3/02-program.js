// Write a short program to find the length of longest continuous increasing subsequence from given unsorted array.
// Example 1:
// Input: [1,3,5,4,7]
// Output: 3
// Explanation: The longest continuous increasing subsequence is [1,3,5], its length is 3.
// Even though [1,3,5,7] is also an increasing subsequence, it's not a continuous one where 5 and 7 are separated by 4.
// Example 2:
// Input: [2,2,2,2,2] Output: 1
// Explanation: The longest continuous increasing subsequence is [2], its length is 1.

function conValues(arr) {
    let currLen = 1;
    let maxLen = 1;
    for(let i=1; i<arr.length; i++) {
        if(arr[i] > arr[i-1]) {
            currLen++;
        } else {
            currLen = 1;
        }
        if(currLen > maxLen) {
            maxLen = currLen;
        }
    }
    return maxLen;
}

console.log(conValues([2,2,2,2,2]));
