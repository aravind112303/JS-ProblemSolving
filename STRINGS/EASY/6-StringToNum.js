// Convert String to Number
//        "123" → 123
// Write a function to convert a string to a number (without using parseInt or Number).


function StringToNum(str) {
    let num =0;
    for(let i=0;i<str.length;i++) {
        let digit = str[i] - '0' // convert character to number
        num = num*10+digit;
    }
    return num;
}

console.log(StringToNum("1234"));
