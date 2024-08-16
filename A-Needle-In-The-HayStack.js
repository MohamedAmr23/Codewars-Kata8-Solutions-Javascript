// Code wars Kata8 Solutions

// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// Loop Through the Array
// Check if the element === needle
// Return The Message

const arr=["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]
let word="needle";

for(let i=0;i<arr.length;i++){
    if(arr[i]===word){
        console.log(`found the needle at position ${arr.indexOf(arr[i])}`)
    }

}
// another solution
function findNeedle(arr) {
 
  
    return "found the needle at position " + arr.indexOf("needle");
  }
console.log(findNeedle(arr))