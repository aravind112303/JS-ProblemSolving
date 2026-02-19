// Find the First Non-Repeating Character
//        "swiss" → ‘w’
// Write a function to find the first non-repeating character in a string.

function nonrepeat(str) {
    for(let i=0; i<str.length; i++) {
        for(let j=i+1; j<str.length; j++) {
            if(str[i] !== str[j]) {
                return str[j];
            }
        }
    }
    return -1;
}
console.log(nonrepeat("swiss"));

