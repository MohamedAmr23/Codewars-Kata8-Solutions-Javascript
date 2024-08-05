// Code wars Kata8 Solutions

// You get an array of numbers, return the sum of all of the positives ones.

// InitValue = 0
// Array Loop
// Check if the number is positive or not
// Add the number to the initValue if Positive


const arr=[-1,0,1,2,3]
let sum=0
for(let i=0 ;i<arr.length;i++){
    if(arr[i]>0){
        sum+=arr[i]
    }
}
console.log(sum)

// another solution
function positiveSum(arr) {
    return arr.filter((x)=>x>0).reduce((acc,current)=>acc+current,0)
}

console.log(positiveSum([-1,0,1,2,3]))