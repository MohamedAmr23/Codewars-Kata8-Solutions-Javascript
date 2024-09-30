function monkeyCount(n) {
    let newArr=[]
    for(let i=1;i<=n;i++){
        newArr.push(i)
    }
    return newArr
}

console.log(monkeyCount(10))