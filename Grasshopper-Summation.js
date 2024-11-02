var summation = function (num) {
    let sum = 0
    for (let i=num ;i>=1 ; i--){
        sum = i + sum
    }
    return sum
}

console.log(summation(8))

// another solution

var summation = function (num) {
   
    return Array(num).fill(true).reduce((acc,cur,index)=>acc + index+1,0)
}

console.log(summation(8))