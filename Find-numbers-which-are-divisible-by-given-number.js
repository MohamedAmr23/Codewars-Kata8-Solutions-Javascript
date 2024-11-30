function divisibleBy(numbers, divisor){
    return res =  numbers.filter((item)=>item % divisor === 0)
   
// let newArray=[]

// for(let i = 0;i<numbers.length;i++){
//     if (numbers[i] % divisor ==0){
//         newArray.push(numbers[i])
        
//     }
// }
// return newArray
}

console.log(divisibleBy([1,2,3,4,5,6], 2))