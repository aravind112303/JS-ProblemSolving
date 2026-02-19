// Flatten a Nested Array
//        [1, [2, [3, [4]], 5]] → [1, 2, 3, 4, 5]
// Write a function to flatten a nested array into a single array.


function NestedArray(arr) {
    let result =[];
    for(let i=0; i<arr.length; i++) {
        if(Array.isArray(arr[i])) {
            let flat = NestedArray(arr[i]);
            for(let j=0; j<flat.length; j++) {
                result.push(flat[j]);
            }
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}

let result = NestedArray([1,[2,[3,[4]],5]]);
console.log(result);
