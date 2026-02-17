// Pair Sum
//        [2, 4, 3, 5, 7, 8, 9], 7 →  [[4, 3], [2, 5]]
// Write a function to find all pairs in an array whose sum is equal to a given target.


function PairSum(arr, sumValue) {
    result =[];
    for(let i=0; i<arr.length; i++) {
        for(let j=i; j<arr.length; j++) {
            if(arr[i]+arr[j] === sumValue) {
                result[result.length] = [arr[i] , arr[j]];
            }
        }
    }
    console.log(result);
    
}

PairSum([2,4,3,5,7,8,9] , 7)