// Convert String to Title Case
//        "hello world" → "Hello World"
// Write a function that converts a string to title case (capitalize the first letter of each word).


function TitleCase(str) {
    result = "";
    capitalize = true;
    for(let i=0; i<str.length; i++) {
        if(str[i] === ' ') {
            result += str[i];
            capitalize = true;
        } else if(capitalize) {
            result += str[i].toUpperCase()
            capitalize = false;
        } else {
            result += str[i].toLowerCase()
        }
    }
    return result;
}
console.log(TitleCase("hello world"));
