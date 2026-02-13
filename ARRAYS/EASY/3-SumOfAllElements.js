function SumOfAllElements(arr) {
    let sum =0;
    for(let i=0; i<arr.length; i++) {
        sum += arr[i];
    }
    console.log(`Sum of All Elements: ${sum}`);
}

arr =[1,2,3,4];
SumOfAllElements(arr);