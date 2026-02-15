// Get Object Values
//       {a: 1, b: 2, c: 3} → [1, 2, 3]
// Write a function that returns an array of all the values in an object.

function GetObjValues(obj) {
    let arr =[];
    for(let key in obj) {
        arr.push(obj[key]);
    }
    return arr;
}

console.log(GetObjValues({a:1,b:2,c:3}));
