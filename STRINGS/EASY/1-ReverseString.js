// Reverse a String
//       "hello" → "olleh"
// Write a function to reverse a given string.


function ReverseString(str) {
    let result ='';
    for(let i= str.length-1; i>=0; i--) {
        result += str[i];
    }
    console.log(result);
    
}

ReverseString("hello");