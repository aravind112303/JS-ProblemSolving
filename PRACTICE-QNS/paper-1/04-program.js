// Given an array arr[] of n integers, write a program to return a new array such that each element at index i is the product of all the elements of the original array except arr[i], without using division. 
// Examples: 
// Input: arr[] = [1,2,3,4] and 
// Output: (24,12,8,6)

function Product(arr) {
    let result = [];
    for(let i=0; i<arr.length; i++) {
        let product = 1;
        for(let j=0; j<arr.length; j++) {
            if(i !== j) {
                product *= arr[j];
            }
        }
        result[i] = product;
    }
    return result;
}

console.log(Product([1,2,3,4]));
