function FirstLargest(arr) {
    let large = -Infinity;
    for(let i=0; i<arr.length; i++) {
        if(arr[i] > large) {
            large = arr[i];
        }
    }
    console.log(`Large : ${large}`);
    
}

let arr = [2,3,8,4,6];
FirstLargest(arr);