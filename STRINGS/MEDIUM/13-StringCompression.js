// String Compression
//        "aabcccccaaa" → "a2b1c5a3"
// Write a function to perform basic string compression using the counts of repeated characters (e.g., aabcccccaaa becomes a2b1c5a3).

function StringCompression(str) {
    let result='';
    let count =1;
    let p= str.charAt(0);
    for(let i=1; i<str.length; i++) {
        if(p === str[i]) {
            count++;
        } else {
            result += p+count;
            p = str[i];
            count = 1;
        }
    }
    //add last character
    result += p+count;
    console.log(result);
    
}

StringCompression("aabcccccaaa");