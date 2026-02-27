// 4 Write a program to find all leader elements in an array. An element is called a leader if it is greater than all elements to its right.
// Examples:
// Input [16, 17, 4, 3, 5, 2]
// Output [17, 5, 2]

function LeaderEle(arr) {
    let result = [];
    
    for(let i=0; i< arr.length; i++) {
        let check = true;
        for(let j=i+1; j<arr.length; j++) {
            if(arr[i] < arr[j]) {
                check = false;
                break;
            } 
        }
        if(check === true) {
            result[result.length] = arr[i];
        }
    }
    return result;
}

let result = LeaderEle([16,17,4,3,5,2]);

for(let i=0; i<result.length; i++) {
    console.log(result[i]);
    
}