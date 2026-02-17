// Find Peak Element
//        [1, 3, 20, 4, 1, 0] →  20
// Write a function to find a peak element in an array. An element is a peak if it is not smaller than its neighbours.


function PeakEle(arr) {
    for(let i=0; i<arr.length; i++) {
        let left = (i===0 || arr[i] >= arr[i-1]);
        let right = (arr.length === 0 || arr[i] >= arr[i+1]);
        if(left && right) {
            return arr[i];
        }
    }
    return -1;
}

const peak = PeakEle([1,3,20,4,1,0]);
console.log(peak);
