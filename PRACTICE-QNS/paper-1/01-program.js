// Write a program that removes all adjacent duplicate characters recursively in a given string. If removing duplicat new adjacent duplicates, those should also be removed recursively. 
// Example: Input: "azxxzy" output : "ay"

function Recurvively(str) {
    let result ="";
    let i=0;
    let changed = false;
    while(i< str.length) {
        let j= i+1;
        while(j < str.length && str[i] === str[j]) {
            j++;
            changed = true;
        }
        if(j === i+1) {
            result += str[i];
        }
    i = j;
    }
    if(changed) {
       return Recurvively(result);
    }
    return result;
}

console.log(Recurvively("azxxzy"));
