//Prime Number or not

const prompt = require("prompt-sync")();  // import prompt-sync

const num = parseInt(prompt("Enter any number: "));  // take input, parseInt to make sure input is number

let count =0;

for(let i=1;i<=num; i++) {
    if(num%i ==0) {
        count += 1;
    }
}
if(count === 2) {
    console.log(`${num} is Prime number`);
} else {
    console.log(`${num} is not Prime number`);
}