function getAverage(marks){
 return res= Math.floor(marks.reduce((curr,acc)=>curr + acc) / marks.length) 
}
console.log(getAverage([2,2,2,2]))