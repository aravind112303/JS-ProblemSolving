// Count Vowels in a String
//        "hello world" → 3
// Write a function to count the number of vowels in a given string.


function CountVowels(str) {
    let count =0;
    let vowels = "aeiouAEIOU";
    for(let i=0; i<str.length; i++) {
        if(vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}

console.log(CountVowels("Aravind"));
