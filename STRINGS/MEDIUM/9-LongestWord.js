function LongestWord(sentence) {
    let maxString ="";
    let maxCount =0;
    let currCount =0;
    let currString ="";
    for(let i=0; i<sentence.length; i++) {
        let char = sentence.charAt(i);
        if(char !== " ") {
            currString += char;
            currCount++;
        } else {
            if(currCount >= maxCount) {
                maxCount = currCount;
                maxString = currString;
            }
            currCount =0;
            currString ="";
        }
    }
    if(currCount >= maxCount) {
        maxString = currString;
    }
    console.log(maxString);
    
}

let word = "The quick brown fox jumps over the lazy dog";
LongestWord(word);