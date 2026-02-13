function RemoveDuplicates() {
    let result =[];
    for(let i=0; i<arr.length; i++) {
        let exist =false;
        for(let j=0; j<result.length; j++) {
            if(arr[i] === result[j]) {
                exist = true;
                break;
            }
        }
        if(!exist) {
            result[result.length] = arr[i];
        }
    }
    console.log(result);
}

let arr = [1,2,2,3,4,4,5];
RemoveDuplicates(arr);