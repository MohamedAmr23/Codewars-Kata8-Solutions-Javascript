function findMultiples(integer, limit) {
    let newArray = []
    for (let i = integer ; i <= limit ; i+=integer){
      newArray.push(i)
    }
    return newArray
  }
console.log(findMultiples(5,25))  