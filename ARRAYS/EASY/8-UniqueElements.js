// Find Unique Elements
//        [1, 2, 2, 3, 4, 4, 5] → [1, 3, 5]
// Write a function to find the unique elements in an array (elements that appear only once).


function UniqueElements() {
    let result =[];
    for(let i=0; i<arr.length; i++) {
       let count =0;
       for(let j=0; j<arr.length; j++) {
        if(arr[i] === arr[j]) count++;
       }
       if(count == 1) {
        result[result.length] = arr[i];
       }
    }
    return result;
}

let arr = [1,2,2,3,4,4,5];
console.log(UniqueElements(arr));
