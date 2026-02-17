// Find the Maximum Product of Two Elements
//        [3, 5, -2, 8, 11] → 8*11 →88
// Write a function to find the maximum product of two elements in an array.


function MaxProduct(arr) {
    let maxEle = -Infinity;
    let secMax = -Infinity;
    for(let i=0; i<arr.length; i++) {
        if(arr[i] > maxEle) {
            secMax = maxEle;
            maxEle = arr[i];
        }
        else if(arr[i] > secMax && arr[i] < maxEle) {
            secMax = arr[i]
        }
    }
    const product = maxEle * secMax;
    console.log(product);
    
}

MaxProduct([3,5,-2,8,11]);