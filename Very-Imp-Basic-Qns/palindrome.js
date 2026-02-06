//To check given num is palindrome or not

let num = 1221;
let original = num;
let reversed =0;

while(num > 0) {
    let digit = num %10;
    reversed = reversed*10 +digit;
    num = Math.floor(num/10);
}

if(original === reversed) {
    console.log("Palindrome")
} else {
    console.log("not Palindrome");    
}