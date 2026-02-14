// Remove Vowels from a String
//        "hello world" → "hll wrld"
// Write a function to remove all vowels from a given string.


function RemoveVowels(str) {
    result ="";
    vowels = "AEIOUaeiou";
    for(let i=0; i<str.length; i++) {
        if(!vowels.includes(str[i])) {
            result +=str[i];
        }
    }
    return result;
}

console.log(RemoveVowels("Aravind"));
