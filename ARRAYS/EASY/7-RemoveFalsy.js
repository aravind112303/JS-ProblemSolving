function RemoveFalsy() {
    let result = [];
    for(let i=0; i<arr.length; i++) {
        if(arr[i]) {
            result[result.length] = arr[i];
        }
    }
    return result;
}

let arr = [0,1,false,2,'',3];
console.log(RemoveFalsy(arr));
