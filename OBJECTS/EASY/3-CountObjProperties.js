// Count Object Properties
//        {a: 1, b: 2, c: 3} → 3 
// Write a function that returns the number of properties in an object.

function code(obj) {
    let count=0;
    for(let key in obj) {
        count++;
    }
    return count;
}

console.log(code({a:1,b:2,c:3}));
