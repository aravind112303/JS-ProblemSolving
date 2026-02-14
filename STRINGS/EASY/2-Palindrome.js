// Check if a String is a Palindrome
//       "racecar"  → true 


function Palindrome(str) {
    let start =0;
    let end = str.length-1;
    while (start < end) {
        if(str[start] !== str[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}

console.log(Palindrome("racecar"));
