// Check if Object is Empty
//         {} → true 
// Write a function to check if an object is empty (i.e., has no properties).

function ObjectEmpty(obj) {
    for(let key in obj) {
        return false;
    }
    return true;
}

console.log(ObjectEmpty({}));
