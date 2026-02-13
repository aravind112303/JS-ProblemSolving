function SecondLargest(arr) {
    let SecondLargest = -Infinity;
    let FirstLargest = -Infinity;
    for(let i=0; i<arr.length; i++) {
        if(arr[i] > FirstLargest) {
            SecondLargest = FirstLargest;
            FirstLargest = arr[i];
        } else if(arr[i] > SecondLargest && arr[i] < FirstLargest) {
            SecondLargest = arr[i];
        }
    }
    console.log(`SecondLargest : ${SecondLargest}`);
    
}

let arr = [10,5,10];
SecondLargest(arr);

// SecondLargest : -Infinity (i got this answer when i didn't use else if part)
// SecondLargest : 5