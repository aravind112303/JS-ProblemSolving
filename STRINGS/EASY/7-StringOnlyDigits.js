// Check if String Contains Only Digits
//       "12345" → true 
// Write a function to check if a string contains only numeric digits.

function StringOnlyDigits(str) {
    for(let i=0; i<str.length; i++) {
        if(str[i] < '0' || str[i] > '9') {  //checks whether the num is b/w '0' -> 49 to '9'->57 or not
            return false;
        }
    }
    return true;
}

console.log(StringOnlyDigits("123a456"));
