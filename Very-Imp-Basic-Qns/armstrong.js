// 153 = 1 cube 3 + 5 cube 3 + 3 cube 3 = 153

let num = 153;
let original = num;
let sum =0;
let n = num.toString().length;

while(num > 0) {
    let digit = num % 10;
    sum += Math.pow(digit,n);
    num = Math.floor(num/10);
}

if(sum === original) {
    console.log("Armstrong number");
} else {
    console.log("Not Armstrong number");
    
}
