// Given a string, return a new string where:

// Characters are sorted by frequency (descending)

// If two characters have same frequency, order doesn’t matter

// Do NOT use predefined functions

// Example

// Input:  "Tree"
// Output: "eert" or "rtee"

function frequencyFirst(str) {
    let freq = {};
    let result = "";
    for(let i=0; i<str.length; i++) {
        let ch = str[i];
        if(freq[ch]) {
            freq[ch]++;
        } else {
            freq[ch] = 1;
        }
    }
    
    while(true) {
        let maxCount = 0;
        let maxChar = null;
        for(let key in freq) {
            if(freq[key] > maxCount) {
                maxCount = freq[key];
                maxChar = key;
            }
        }
          if(maxChar === null) {
            break;
          }
        for(let i=0; i<maxCount; i++) {
            result += maxChar;
        }
        delete freq[maxChar];
    }

    return result;
}

console.log(frequencyFirst("Tree"));
