// Sum of All Elements
//        [1, 2, 3, 4] → 10 
// Write a function that returns the sum of all elements in an array.


function SumOfAllElements(arr) {
    let sum =0;
    for(let i=0; i<arr.length; i++) {
        sum += arr[i];
    }
    console.log(`Sum of All Elements: ${sum}`);
}

arr =[1,2,3,4];
SumOfAllElements(arr);