// Check for Anagrams
//        "listen", "silent"  → true
// Write a function to check if two strings are anagrams of each other.

function anagrams(str1,str2) {
    if(str1.length !== str2.length) {
        return false;
    } else {
        let check = {};
        for(let i=0; i< str1.length; i++) {
            check[str1[i]] = (check[str1[i]] || 0) + 1; 
        }
        for(let i=0; i< str2.length; i++) {
            if(!check[str2[i]]) {
                return false;
            }
            check[str2[i]]--;
        }
    }
    return true;
}

console.log(anagrams("listen" , "silent"));
