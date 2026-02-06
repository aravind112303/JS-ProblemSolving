let first = 0;
let second = 1;

let end = 10;

console.log(first);
console.log(second);

for(let i=3; i<=end; i++) {
    next = first + second;
    first = second;
    second = next;
    console.log(next);
}