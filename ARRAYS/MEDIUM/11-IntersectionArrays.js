// Intersection of Two Arrays
//       [1, 2, 3], [2, 3, 4]  → [2,3]
// Write a function that returns the common elements between two arrays.


function IntersectionArrays(arr1, arr2) {
    let result =[]
    for(let i=0; i<arr1.length; i++) {
        for(let j=0; j<arr2.length; j++) {
            if(arr1[i]===arr2[j]) {
                result[result.length] = arr1[i];
            }
        }
    }
    console.log(result);
    
}

IntersectionArrays([1,2,3],[2,3,4]);