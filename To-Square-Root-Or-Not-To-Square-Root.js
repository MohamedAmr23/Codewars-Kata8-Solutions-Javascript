let arr=[4,3,9,7,2,1]
let newArr=[]
arr.map((ele)=>{
    // if(Number.isInteger(Math.sqrt(ele))){
    //     newArr.push(Math.sqrt(ele) )
    // }else{
    //     newArr.push(ele*ele)
    // }
    Number.isInteger(Math.sqrt(ele))? newArr.push(Math.sqrt(ele) ):newArr.push(ele*ele)
})
console.log(newArr)


