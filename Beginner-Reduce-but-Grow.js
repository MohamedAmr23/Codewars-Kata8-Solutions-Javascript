function grow(x){
    return x.reduce((curr,acc)=>curr * acc )
}

console.log(grow([2, 2, 2, 2, 2, 2]))

// another solution
const growT=x=>eval(x.join("*"))

console.log(growT([2, 2, 2, 2, 2, 2]))