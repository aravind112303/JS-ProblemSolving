// Find the First Non-Repeating Character
//        "swiss" → ‘w’
// Write a function to find the first non-repeating character in a string.


function FirstNon(str) {
   let freq={};
   for(let ch of str) {
    freq[ch] = (freq[ch] || 0) + 1;
   }
   for(let ch of str) {
    if(freq[ch] === 1) {
        return ch;
    }
   }
   return -1;
}

console.log(FirstNon("swiss"));

