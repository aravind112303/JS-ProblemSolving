// Given the arrival and departure times of N trains in 24-hour format (e.g., 900 for 9:00 AM, 1730 for 5:30 PM), find the minimum number of platforms required at the station so that no train has to wait. You must ensure that no train waits at the station even if two trains arrive at the same time, they both need platforms.
// Input: arr[] represents arrival times and dep[] represents associated departure times 
// arr = [900, 940, 950, 1100, 1500, 1800]
//  dep [910, 1200, 1120, 1130, 1900, 2000]

function Train(arr, dep) {
    // sort arrival 
    for(let i=0; i< arr.length-1; i++) {
        for(let j=0; j< arr.length-i-1; j++ ) {
           if(arr[j] > arr[j+1]) {
             let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
           }
        }
    }
    // sorting departure
    for(let i=0; i<dep.length-1; i++) {
        for(let j=0; j<dep.length-i-1; j++) {
            if(dep[j] > dep[j+1]) {
                let temp = dep[j];
                dep[j] = dep[j+1];
                dep[j+1] = temp;
            }
        }
    }
    // initial values
    let platformneeded = 1;
    let totalPlatform = 1;
    let i=1 , j=0;

    // calculate number of platforms needed
    while(i < arr.length && j < dep.length) {
        if(arr[i] <= dep[j]) {
            platformneeded++;
            i++;
        } else {
            platformneeded--;
            j++;
        }
        if(platformneeded > totalPlatform) {
            totalPlatform = platformneeded;
        }
    }
    return totalPlatform;
}
let dep = [910, 1200, 1120, 1130, 1900, 2000];
let arr = [900, 940, 950, 1100, 1500, 1800];
console.log(Train(arr, dep));
