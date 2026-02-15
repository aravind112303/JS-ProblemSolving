// Merge Two Objects
//       {a: 1, b: 2}, {b: 3, c: 4} → {a: 1, b: 3, c: 4}
// Write a function that merges two objects, giving priority to the properties of the second object in case of conflict.

function MergeTwoObj(obj1,obj2) {
    result = {};
    for(let key in obj1) {
        result[key] = obj1[key];
    }
    for(let key in obj2) {
        result[key] = obj2[key];
    }
    return result;
}

console.log(MergeTwoObj({a:1,b:2},{b:3,c:4}));
