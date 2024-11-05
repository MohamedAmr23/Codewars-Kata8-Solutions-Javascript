function squareSum(numbers){
    return numbers.map((item)=>item ** 2).reduce((acc,cur)=>acc + cur,0)
    
}

console.log(squareSum([1,2]))