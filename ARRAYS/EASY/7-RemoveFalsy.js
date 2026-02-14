// Remove Falsy Values
//       [0, 1, false, 2, '', 3] → [1, 2, 3]
// Write a function that removes all falsy values (false, 0, "", null, undefined, NaN) from an array.

function RemoveFalsy() {
    let result = [];
    for(let i=0; i<arr.length; i++) {
        if(arr[i]) {
            result[result.length] = arr[i];
        }
    }
    return result;
}

let arr = [0,1,false,2,'',3];
console.log(RemoveFalsy(arr));
