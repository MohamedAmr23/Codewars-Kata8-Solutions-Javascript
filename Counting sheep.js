// Code wars Kata8 Solutions

// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// Initial value of zero
// Loop through the array
// Check if the sheep === True , increase the Intial Value + 1


let arr= [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]
    let sum=0;
for (let i=0 ;i<arr.length;i++){
    if(arr[i]===true){
       
        sum+=1
    }
   
}  
console.log(sum)

// another solution
function countSheeps(arrayOfSheep) {
    let counter = 0;
    arr.map((m) => {
      if (m === true) counter++;
    });
    return counter;
  }
  console.log(countSheeps(arr))