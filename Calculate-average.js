function findAverage(array) {
     const res=array.reduce((acc,cur)=>  cur + acc ,0)/array.length;
    return res
  }

console.log(findAverage([1,2,6,9]))
