// Given an array of characters, compress it using the following algorithm: Begin with an empty string and iterate through the array, counting consecutive characters. if a character appears consecutively, add the character followed by its count to the compressed string. If the compressed string is not shorter than the original, return the original string. 
// Example: 
// Input: ['a', 'a', 'b', 'b', 'c', 'c', 'c'] Output: 'a2b2c3'

function Strings(arr) {
    let compressed = "";
    let count = 1;
    for(let i=0; i<arr.length; i++) {
        if(arr[i] === arr[i+1]) {
            count++;
        } else {
            compressed += arr[i] + count;
            count = 1;
        }
    }

    let original = "";
    for(let i=0; i<arr.length; i++) {
        original += arr[i];
    }

    if(compressed > original) {
        return original;
    }
    return compressed;
}

console.log(Strings(['a','a','b','b','c','c','c']));
