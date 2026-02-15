// Convert Array to Object
//       [["name", "Alice"], ["age", 25]] → {name: "Alice", age: 25}
// Write a function that converts an array of key-value pairs into an object.

function ArrayToObj(arr) {
    let result = {};
    for(let i=0; i<arr.length; i++) {
        let key = arr[i][0];
        let values = arr[i][1];
        result[key] = values;
    }
    return result;
}

console.log(ArrayToObj([["name","Alice"],["age",25]]));
