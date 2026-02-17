// Move Zeros to End
//        [0, 1, 0, 3, 12] → [1, 3, 12, 0, 0]
// Write a function that moves all zeros in an array to the end while maintaining the order of other elements.

function MoveZeros(arr) {
    let result = [];
    let count =0;
    for(let i=0; i<arr.length; i++) {
        if(arr[i] === 0) {
            count +=1;
        } else {
            result[result.length] = arr[i];
        }
    }
    for(let i=0; i<= count; i++) {
        result[result.length] = 0;
        count
    }
    console.log(result);
    
}

MoveZeros([0,1,0,3,12]);