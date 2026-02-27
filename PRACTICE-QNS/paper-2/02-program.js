function UniqueSort(arr) {
    // remove duplicates
    let unq = [];
    for(let i=0; i<arr.length; i++) {
        let found = false;
        for(let j=0; j<unq.length; j++) {
            if(arr[i] === unq[j]) {
                found = true;
                break;
            }
        }
        if(!found) {
            unq[unq.length] = arr[i];
        }
    }

    //sorting bubble sort
    for(let i=0; i< unq.length-1; i++) {
        for(let j=0; j<unq.length-i-1; j++) {
            if(unq[j] > unq[j+1]) {
                let temp = unq[j];
                unq[j] = unq[j+1];
                unq[j+1] = temp;
            }
        }
    }
    return unq;
}

console.log(UniqueSort([3,1,2,3,4,1,5]));
