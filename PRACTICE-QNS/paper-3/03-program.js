// 3. Remove minimum number of characters so that two strings become anagram
// Example 1:
// Input: str1 = "cddgk" str2 = "gcd"
// Output: 2
// We need to remove 'c' and 'k' from strl.
// Example 2:
// Input: str1 "beca" str2 = "abc"
// Output: 0   i need a basic brute force code

function anagram(str1,str2) {
   let count1 = {};
   let count2 = {};
   let removal = 0;
   for(let i=0; i<str1.length; i++) {
    let ch = str1[i];
    if(count1[ch]) {
        count1[ch]++;
    } else {
        count1[ch] = 1;
    }
   }
   for(let i=0; i< str2.length; i++) {
    let ch = str2[i];
    if(count2[ch]) {
        count2[ch]++;
    } else {
        count2[ch] = 1;
    }
   }

   for(let key in count1) {
    if(count2[key]) {
        if(count1[key] > count2[key]) {
            removal += count1[key] - count2[key];
        } else {
            removal += count2[key] - count1[key];
        }
    } else {
        removal += count1[key];
    }
   }

   for(let key in count2) {
    if(!count1[key]) {
        removal += count2[key];
    }
   }
   return removal;
}

let str1 = "cddgk";
let str2 = "gcdkjh";
console.log(anagram(str1,str2));
