function betterThanAverage(classPoints, yourPoints) {
     Avg=classPoints.reduce((cur,acc)=>cur+acc) /classPoints.length
    if (yourPoints > Avg){
        return true
    }else{
        return false
    }
  }
  
 console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9)) 