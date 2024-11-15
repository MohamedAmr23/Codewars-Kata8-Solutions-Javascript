function sumMix(x){
   return Number( x.map((item)=>Number(item)).reduce((curr,acc)=>curr + acc ))
  }

  console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]))