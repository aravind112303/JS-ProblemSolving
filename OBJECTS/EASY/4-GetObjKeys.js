// Get Object Keys
//       {a: 1, b: 2, c: 3} → ["a", "b", "c"]
// Write a function that returns an array of all the keys in an object.

function GetObjKeys(obj) {
    let arr=[];
    for(let key in obj) {
        arr.push(key)
    }
    return arr;
}

console.log(GetObjKeys({a:1,b:2,c:3}));
