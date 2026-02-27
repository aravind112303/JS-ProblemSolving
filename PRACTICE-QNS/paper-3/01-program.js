// 1. Find that non-duplicate prime number from given a non-empty array of integers.
// Example 1: Input: [2,8, 7,11,2,1,7] Output: 11
// Example 2: Input: [4,5,2,6,2,29,5] Output: 29
// Write

function nonDupPrime(arr) {
    let Filterprime = [];
    //filtered array only primes
    for(let i=0; i<arr.length; i++) {
        let num = arr[i];
        let count =0;
        for(let j=1; j<= num; j++) {
            if(num % j === 0) {
                count++;
            }
        }
        if(count === 2) {
            Filterprime[Filterprime.length] = arr[i];
        }
    }
    // non duplicate prime return;
    for(let i=0; i<Filterprime.length; i++) {
        let count2 = 1;
        for(let j=i+1; j<Filterprime.length; j++) {
            if(Filterprime[i] === Filterprime[j]) {
                count2++;
            }
        }
        if(count2 === 1) {
            return Filterprime[i];
        }
    }
}

let arr = [2,8,7,11,2,1,7];
console.log(nonDupPrime(arr));
