// Code wars Kata8 Solutions

// Check if Empty Value return 0
// Find the heighest Number
// Find the Lowest Number
// Filter the Array
// Sum all numbers in the array




// const arr=[ 1, 1, 11, 2, 3]
// let high=arr[0]
// let low=arr[0]
// let sum=0;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>=high){
//         high=arr[i]
       
//     }
//     if(arr[i]<=low){
//         low=arr[i]
       
//     }
   
//     sum+=arr[i]
    
// }
// let newSum=sum-(high+low)
// console.log(newSum)



// another solution

function sumWithoutTheHeighestAndLowestNumber(array) {
    if (array == null) return 0;
    return array
      .sort((a, b) => a - b)
      .slice(1, -1)
      .reduce((acc, current) => acc + current, 0);
  }
  console.log(
    sumWithoutTheHeighestAndLowestNumber([1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 9])
  );