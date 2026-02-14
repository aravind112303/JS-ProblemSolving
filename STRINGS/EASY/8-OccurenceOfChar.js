// Count Occurrences of a Character
//        "hello world", "l" → 3
// Write a function that counts the occurrences of a specific character in a string.

function OccurrenceOfChar(str, letter) {
    let count =0;
    for(let i=0; i<str.length; i++) {
        if(str[i] === letter) {
            count++;
        }
    }
    return count;
}

console.log(OccurrenceOfChar("hello world" , "l"));
